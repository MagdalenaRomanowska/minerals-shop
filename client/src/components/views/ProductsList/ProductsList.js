import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductsList.module.scss';
import { Link } from 'react-router-dom';

class ProductsList extends React.Component {
  componentDidMount() {
    const { loadMinerals, loadProducts } = this.props;
    loadMinerals();
    loadProducts();
  }

  render() {
    const { minerals, products } = this.props;

    return (
      <div className={styles.productDescription}>
        <div className={styles.squaresLeftSided}>
          <ul className={styles.squares}>
          {[...Array(32)].map((x, i) => (
              <li key={i}>
                <i className={"far fa-gem"}></i>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.sectionTitle}>
        O<span className={styles.letter}></span>U
          <span className={styles.letter}></span>R
          <span className={styles.letter}></span> &nbsp; &nbsp; P
          <span className={styles.letter}></span>R
          <span className={styles.letter}></span><i className={'far fa-gem'}></i>
          <span className={styles.letter}></span>D
          <span className={styles.letter}></span>U
          <span className={styles.letter}></span>C
          <span className={styles.letter}></span>T
          <span className={styles.letter}></span>S
        </div>
        <div className={styles.allProductsToChoose}>
          <div className={styles.allProducts}>
            {products !== undefined && products.length ? (
              products.map((product) => (
                <div className={styles.product} key={product.addressProduct}>
                  <Link
                    key={product.addressProduct}
                    to={`/product/${product.addressProduct}`}
                    className={styles.photoInside}
                  >
                    <img
                      src={product.photoProductHomepage}
                      alt={'PhotoProduct'}
                    />
                    <p className={styles.clickToSeeDetails}>
                      Click to see details
                    </p>
                  </Link>
                  <div className={styles.productText}>
                    <div className={styles.productName}>
                      <div className={styles.productNameContent}>
                        <b>{product.titleProduct}</b>
                      </div>
                    </div>
                    <div className={styles.productPrice}>
                      <div className={styles.productPriceTitle}>
                        Minimal price:
                      </div>
                      <div className={styles.productPriceContent}>
                        {product.priceProduct} $
                      </div>
                      <div className={styles.empty}></div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Sorry, no results found.</p>
            )}
          </div>
        </div>
        <div className={styles.sectionTitle}>
          Explore our minerals used in jewelry production
        </div>
        <div className={styles.allMinerals}>
          {minerals.length ? (
            minerals.map((mineral) => (
              <div className={styles.photoInsideMaterial} key={mineral.title}>
                <img src={mineral.photo} alt={'mineralPhoto'} />
                <div className={styles.mineralTitle}>
                  {mineral.title}<br></br> &nbsp; <br></br>
                  <Link
                    className={styles.clickToExplore}
                    key={mineral.title}
                    to={`/minerals/${mineral.title}`}
                  >
                    Explore
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>Sorry, no results found.</p>
          )}
        </div>
      </div>
    );
  }
}

ProductsList.propTypes = {
  minerals: PropTypes.string,
  products: PropTypes.string,
  loadMinerals: PropTypes.func, 
  loadProducts: PropTypes.func,
};

export default ProductsList;
