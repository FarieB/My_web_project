document.addEventListener('DOMContentLoaded', function () {
  const productTypeSelect = document.getElementById('product-type');
  const companySelect = document.getElementById('company');
  const comparisonResults = document.getElementById('comparison-results');

  // Assume the API URL is hosted on the same server
  const apiUrl = '/api/compare';

  productTypeSelect.addEventListener('change', function () {
    const selectedProductType = this.value;
    companySelect.innerHTML = ''; // Reset company options

    // Populate company select based on selected product type
    if (selectedProductType) {
      fetch(`/api/compare?productType=${selectedProductType}`)
        .then(response => response.json())
        .then(data => {
          data.companies.forEach(company => {
            const option = document.createElement('option');
            option.value = company.name;
            option.textContent = company.name;
            companySelect.appendChild(option);
          });
        })
        .catch(error => console.error('Error fetching company data:', error));
    }
  });

  document.getElementById('compare-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const productType = productTypeSelect.value;
    const company = companySelect.value;

    if (productType && company) {
      fetch(`${apiUrl}?productType=${productType}&company=${company}`)
        .then(response => response.json())
        .then(data => {
          if (data.error) {
            comparisonResults.innerHTML = `<p>${data.error}</p>`;
          } else {
            comparisonResults.innerHTML = `
              <h3>Comparison Results</h3>
              <p><strong>Company:</strong> ${data.company}</p>
              <p><strong>Premium:</strong> ${data.premium}</p>
              <p><strong>Coverage:</strong> ${data.coverage}</p>
              <p><strong>Terms:</strong> ${data.terms}</p>
            `;
          }
        })
        .catch(error => console.error('Error fetching comparison data:', error));
    } else {
      comparisonResults.innerHTML = '<p>Please select both product type and company.</p>';
    }
  });
});

