class FILTER{
  constructor(filterElem){
    this._elem = filterElem;  // The HTML Element that contains all of the filters
    this._filterOptionsElem = this.elem.querySelector(".filter-options");
    this._priceRangeSelector = this.elem.querySelector("input[type='range']");
    this._productContainerElem = document.querySelector(".product-grid");
    this._products = this._productContainerElem.querySelectorAll(".product");
    this._filterButtons = this.elem.querySelectorAll(".filter-tags button");

    this._showButton = this.elem.querySelector("button.show-filter");

    this._filters = [];

    this.setupListeners();
  }

  setupListeners(){
    let obj = this;
    this._showButton.addEventListener("click",this.showFilter.bind(this));
    this._priceRangeSelector.addEventListener("change",this.priceFilter.bind(this));

    for(let i = 0; i < obj._filterButtons.length; i++){
      obj._filterButtons[i].addEventListener("click",obj.filterHandler.bind(obj));
    }
  }

  loadParamFilters(){
    let urlString = window.location.href;
    // let paramArray = urlString.substring(urlString.indexOf("?") +1).split("&");

  }

  priceFilter(e){
    let t = e.currentTarget;
    let p = t.parentElement;
    let c = p.querySelector(".cost");

    c.innerHTML = t.value;
  }

  filterHandler(e){
    let t = e.currentTarget;

    let index = this.filters.indexOf(t.dataset.label);
    
    if(index >= 0){
      t.dataset.state = 'inactive';
      this.filters.splice(index,1);
      this.unfilterAll();
      this.filter();
      if(this.filters.length === 0){ this.showAll() }
    } else{
      t.dataset.state = 'active';
      this.filters.push(t.dataset.label);
      this.unfilterAll();
      this.filter();
    }

    document.querySelectorAll(".product[data-state='show']").length > 0 ? document.querySelector(".no-products").dataset.state = 'hide' : document.querySelector(".no-products").dataset.state = 'show';
  }

  showFilter(e){
    let t = e.currentTarget;
    
    if(this.elem.dataset.state === "active"){
      this.elem.dataset.state = "inactive";
      this._filterOptionsElem.parentElement.style.height = "0px";
    }else{
      this.elem.dataset.state = "active";
      this._filterOptionsElem.parentElement.style.height = this._filterOptionsElem.offsetHeight+"px";
    }
  }

  unfilterAll(){
    let obj = this;
    for(let i = 0; i < obj.products.length; i++){
      obj.products[i].dataset.state = 'hide';
    }
  }

  showAll(){
    let obj = this;
    for(let i = 0; i < obj.products.length; i++){
      obj.products[i].dataset.state = 'show';
    }
  }

  filter(){
    let obj = this;
    for(let i = 0; i < obj.products.length; i++){
      if(obj.filters.indexOf(obj.products[i].dataset.tags) >= 0){
        obj.products[i].dataset.state = 'show';
      }
    }
  }

  get elem(){ return this._elem }

  get filters(){ return this._filters }
  set filters(newFilter){ this._filters = newFilter }

  get products(){ return this._products }
}