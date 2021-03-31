class FILTER{
  constructor(filterElem){
    this._elem = filterElem;  // The HTML Element that contains all of the filters
    this._filterOptionsElem = this.elem.querySelector(".filter-options");

    this._showButton = this.elem.querySelector("button.show-filter");

    this._filters = [];

    this.setupListeners();
  }

  setupListeners(){
    this._showButton.addEventListener("click",this.showFilter.bind(this));
  }

  loadParamFilters(){
    let urlString = window.location.href;
    // let paramArray = urlString.substring(urlString.indexOf("?") +1).split("&");

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

  get elem(){ return this._elem }

  get filters(){ return this._filters }
  set filters(newFilter){ this._filters = newFilter }
}