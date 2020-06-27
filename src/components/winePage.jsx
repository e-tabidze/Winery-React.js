import React, { Component } from "react";
import { getWines } from "../data/wines";
import { getBrands } from "../data/brands";
import { paginate } from "../components/reusableComponnets/paginate";
import Pagination from "./pagination";
import SearchBox from "./searchBox";
import WineList from "./wineList";
import WineForm from "../components/wineForm";
import beautifulsth from "../photos/beautifulsth.png";
import grapes from "../photos/grapes.png";

import "../CSS/winePage.css";
import Navbar from "./navbar";

class WinePage extends Component {
  state = {
    wines: [],
    brands: [],
    pageSize: 4,
    currentPage: 1,
    searchQuery: "",
    selectedBrand: null,
    showModal: false,
    wineId: null,
  };

  componentDidMount() {
    this.setState({ wines: getWines(), brands: getBrands() });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleBrandSelect = (brand) => {
    this.setState({ selectedBrand: brand, searchQuery: "", currentPage: 1 });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedBrand: null, currentPage: 1 });
  };

  handleToggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  handleBrowseWine = async (id) => {
    await this.setState({ wineId: id });
    this.handleToggleModal();
  };

  render() {
    const {
      pageSize,
      currentPage,
      wines: allWines,
      selectedBrand,
      searchQuery,
    } = this.state;

    if (this.state.wines === 0) return <p>There are no wines of this brand</p>;

    let filtered = allWines;
    if (searchQuery)
      filtered = allWines.filter((w) =>
        w.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedBrand && selectedBrand._id)
      filtered = allWines.filter((w) => w.brand._id === selectedBrand._id);

    const wines = paginate(filtered, currentPage, pageSize);

    return (
      <div className="winePage">
        <Navbar />
        <div className="wine_page-container">
          <div className="list-group">
            <img
              className="beautifulsth"
              src={beautifulsth}
              alt="beautifulsth"
            />
            {/* <h3>Filter</h3>
          <ListGroup
            items={this.state.brands}
            onItemSelect={this.handleBrandSelect}
            selectedItem={this.state.selectedBrand}
          /> */}
          </div>
          <div className="wine_page_content">
            <h1 style={{ marginBottom: "50px" }} className="quote">
              "Wine is a living thing. It is made, not only of grapes and
              yeasts, but of skill and patience. When drinking it remember that
              to the making of that wine has gone, not only the labor and care
              of years, but the experience of centuries." - Allan Sichel
            </h1>

            <WineList
              wines={wines}
              browseWine={(id) => this.handleBrowseWine(id)}
            />
            <Pagination
              itemsCount={filtered.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
          <div>
            <SearchBox value={searchQuery} onChange={this.handleSearch} />
            <img className="grapes" src={grapes} alt="grapes" />
          </div>
          {this.state.wineId && (
            <WineForm
              showModal={this.state.showModal}
              wineId={this.state.wineId}
              handleToggleModal={() => this.handleToggleModal()}
            />
          )}
        </div>
      </div>
    );
  }
}

export default WinePage;
