document.addEventListener('DOMContentLoaded', function () {
  const insuranceData = {
    /* Your insurance data as provided */
  };

  const productTypeSelect = document.getElementById('product-type');
  const companySelect = document.getElementById('company');
  const comparisonResults = document.getElementById('comparison-results');

  for (const productType in insuranceData) {
    const option = document.createElement('option');
    option.value = productType;
    option.textContent = productType;
    productTypeSelect.appendChild(option);
  }

  productTypeSelect.addEventListener('change', function () {
    const selectedProductType = this.value;
    companySelect.innerHTML = '';

    if (selectedProductType) {
      const companies = insuranceData[selectedProductType];
      companies.forEach(company => {
        const option = document.createElement('option');
        option.value = company.name;
        option.textContent = company.name;
        companySelect.appendChild(option);
      });
    }
  });

  document.getElementById('compare-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const productType = productTypeSelect.value;
    const company = companySelect.value;

    if (productType && company) {
      const selectedProduct = insuranceData[productType].find(p => p.name === company);

      if (selectedProduct) {
        comparisonResults.innerHTML = `
          <h3>Comparison Results</h3>
          <p><strong>Company:</strong> ${selectedProduct.name}</p>
          <p><strong>Premium:</strong> ${selectedProduct.premium}</p>
          <p><strong>Coverage:</strong> ${selectedProduct.coverage}</p>
          <p><strong>Terms:</strong> ${selectedProduct.terms}</p>
        `;
      } else {
        comparisonResults.innerHTML = '<p>No data available for the selected company.</p>';
      }
    } else {
      comparisonResults.innerHTML = '<p>Please select both product type and company.</p>';
    }
  });
});

