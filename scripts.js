/* scripts.js*/

document.addEventListener('DOMContentLoaded', function () {
  /*Sample data*/
  const insuranceData = {
    'Motor Insurance': [
      { name: 'AutoGuard Ltd', premium: '$500', coverage: '$50,000 for vehicle damage/theft', terms: 'Max coverage for cars under 10 years old. 5% deductible for claims.' },
      { name: 'SafeDrive Inc', premium: '$450', coverage: '$45,000 for vehicle damage/theft', terms: 'Only for drivers aged 25-60. 10% increase for high-risk drivers.' },
      { name: 'MotorSecure', premium: '$600', coverage: '$60,000 for vehicle damage/theft', terms: 'Includes roadside assistance. Max 3 claims per year.' },
      { name: 'RoadCover Co.', premium: '$525', coverage: '$55,000 for vehicle damage/theft', terms: 'No coverage for off-road vehicles. Rental car coverage for 10 days.' },
      { name: 'DriveSure Ltd', premium: '$480', coverage: '$50,000 for vehicle damage/theft', terms: 'Covers hail damage but excludes flood damage. 15% deductible for claims.' },
      { name: 'FastTrack Ins.', premium: '$510', coverage: '$45,000 for vehicle damage/theft', terms: 'Includes free car wash and tire protection. Max 2 claims per year.' },
      { name: 'AutoProtect', premium: '$450', coverage: '$48,000 for vehicle damage/theft', terms: 'Excludes exotic cars. Includes breakdown cover for cars under 5 years old.' },
      { name: 'SafeCar Inc.', premium: '$550', coverage: '$58,000 for vehicle damage/theft', terms: 'Coverage for new cars only. Zero deductible in the first year.' },
      { name: 'AutoShield', premium: '$575', coverage: '$60,000 for vehicle damage/theft', terms: 'No claims discount applies after 2 claim-free years.' },
      { name: 'RoadSafe Ins.', premium: '$490', coverage: '$48,000 for vehicle damage/theft', terms: '5% premium discount for eco-friendly vehicles.' }
    ],
    'Health Insurance': [
      { name: 'HealthyLife', premium: '$1,200', coverage: '$100,000 for hospitalization', terms: 'Coverage for in-patient only. No pre-existing conditions coverage for 2 years.' },
      { name: 'HealthPlus Inc', premium: '$1,500', coverage: '$120,000 for medical expenses', terms: 'Includes dental and vision coverage. 20% co-payment on specialist visits.' },
      { name: 'WellnessCare', premium: '$1,000', coverage: '$80,000 for hospitalization', terms: 'Coverage limited to private hospitals. 25% co-payment on all procedures.' },
      { name: 'MedSure Ltd', premium: '$1,300', coverage: '$110,000 for hospitalization and surgery', terms: 'Includes maternity care after 1 year. Max claim limit of $50,000 per year.' },
      { name: 'VitalHealth', premium: '$900', coverage: '$75,000 for medical expenses', terms: 'Excludes pre-existing conditions for the first 3 years.' },
      { name: 'HealthGuard', premium: '$1,400', coverage: '$115,000 for surgery and hospitalization', terms: 'Covers up to 3 dependents for free. 15% co-payment on elective procedures.' },
      { name: 'SafeHealth Inc', premium: '$1,200', coverage: '$90,000 for hospitalization', terms: 'Includes mental health coverage. 10% deductible for surgeries.' },
      { name: 'MedSecure Ltd', premium: '$950', coverage: '$80,000 for medical expenses', terms: 'No dental or vision coverage. 30% co-payment on all visits.' },
      { name: 'HealthPro', premium: '$1,600', coverage: '$130,000 for hospitalization and surgery', terms: 'Maternity coverage starts after 6 months. Max coverage of $60,000 per claim.' },
      { name: 'LifeCare Ins.', premium: '$1,250', coverage: '$100,000 for medical expenses', terms: 'Free annual check-up. Pre-existing conditions covered after 1 year.' }
    ],
    'Home Insurance': [
      { name: 'HomeProtect', premium: '$700', coverage: '$200,000 for property and contents', terms: 'Covers fire, theft, and flood. 15% deductible on claims.' },
      { name: 'SafeHome Ltd', premium: '$650', coverage: '$180,000 for property and contents', terms: 'Excludes flood damage. 20% deductible for natural disaster claims.' },
      { name: 'SecureNest', premium: '$750', coverage: '$220,000 for property and contents', terms: 'Includes coverage for jewelry and electronics. Max 3 claims per year.' },
      { name: 'GuardHome Inc', premium: '$800', coverage: '$230,000 for property and contents', terms: 'Coverage for homes under 20 years old. Includes garden and shed coverage.' },
      { name: 'SafeShelter', premium: '$720', coverage: '$190,000 for property and contents', terms: 'No coverage for homes near water bodies. 10% deductible for burglary claims.' },
      { name: 'HouseSafe Ins.', premium: '$675', coverage: '$210,000 for property and contents', terms: 'Includes coverage for accidental damage. Max 2 claims per year.' },
      { name: 'ProtectNest', premium: '$820', coverage: '$240,000 for property and contents', terms: 'Covers renovations and extensions. 25% deductible for luxury items.' },
      { name: 'ShelterGuard', premium: '$700', coverage: '$200,000 for property and contents', terms: 'Excludes earthquake coverage. Free annual safety inspection.' },
      { name: 'SafeHouse Ltd', premium: '$770', coverage: '$220,000 for property and contents', terms: 'Covers damages due to pets. Includes protection for high-value items.' },
      { name: 'NestGuard', premium: '$780', coverage: '$230,000 for property and contents', terms: 'Includes home office coverage. Max 3 claims per year.' }
    ],
    'Term Life Insurance': [
      { name: 'SecureLife Ltd', premium: '$500', coverage: '$200,000 death benefit', terms: '10-year term. No payout after the term ends.' },
      { name: 'SafeTerm Inc', premium: '$450', coverage: '$180,000 death benefit', terms: '20-year term. No surrender value after the term.' },
      { name: 'LifeGuard Insurance', premium: '$550', coverage: '$250,000 death benefit', terms: '15-year term. Premiums increase every 5 years.' },
      { name: 'TermCare Co.', premium: '$600', coverage: '$300,000 death benefit', terms: '30-year term. Renewable but at a higher premium.' },
      { name: 'LifeProtect Inc', premium: '$480', coverage: '$220,000 death benefit', terms: '20-year term. No payout if the insured survives the term.' },
      { name: 'GuardianLife', premium: '$510', coverage: '$190,000 death benefit', terms: '10-year term. Policy expires without value after the term.' },
      { name: 'SafeGuard Life', premium: '$450', coverage: '$200,000 death benefit', terms: '25-year term. Includes terminal illness rider.' },
      { name: 'ShieldLife', premium: '$525', coverage: '$250,000 death benefit', terms: '15-year term. Guaranteed renewability.' },
      { name: 'SafeFuture Ltd', premium: '$490', coverage: '$220,000 death benefit', terms: '20-year term. Premiums increase by 5% every 10 years.' },
      { name: 'ProtectNow', premium: '$575', coverage: '$280,000 death benefit', terms: '30-year term. Convertible to whole life insurance before age 50.' }
    ],
    'Whole Life Insurance': [
      { name: 'LifeLong Ltd', premium: '$1,200', coverage: '$500,000 lifetime coverage', terms: 'Guaranteed death benefit and cash value accumulation. Fixed premium.' },
      { name: 'ForeverSecure Inc', premium: '$1,500', coverage: '$600,000 lifetime coverage', terms: 'Policy lasts for life. Includes loan option against cash value.' },
      { name: 'WholeLife Guardian', premium: '$1,250', coverage: '$550,000 lifetime coverage', terms: 'Cash value grows over time. Dividends paid annually.' },
      { name: 'LifetimeCare', premium: '$1,300', coverage: '$520,000 lifetime coverage', terms: 'Policy matures at age 100. Guaranteed payout upon death.' },
      { name: 'SecureLife Whole', premium: '$1,400', coverage: '$600,000 lifetime coverage', terms: 'Includes critical illness rider. Cash value accessible after 10 years.' },
      { name: 'LifeSecure Inc', premium: '$1,350', coverage: '$570,000 lifetime coverage', terms: 'Flexible premiums. Includes accidental death benefit.' },
      { name: 'WholeGuard Life', premium: '$1,100', coverage: '$500,000 lifetime coverage', terms: 'Policy expires at age 90. Includes funeral expense coverage.' },
      { name: 'EternalLife', premium: '$1,250', coverage: '$550,000 lifetime coverage', terms: 'Premiums increase every 10 years. Policy loan available.' },
      { name: 'EndlessCare', premium: '$1,300', coverage: '$600,000 lifetime coverage', terms: 'Includes long-term care coverage. Fixed premiums.' },
      { name: 'LifeGuardian', premium: '$1,200', coverage: '$500,000 lifetime coverage', terms: 'Policy includes savings component. Can be used as collateral for loans.' }
    ],
    'Endowment Insurance': [
      { name: 'Endowment Secure', premium: '$900', coverage: '$100,000 maturity benefit', terms: 'Matures after 20 years. Includes savings component.' },
      { name: 'LifeSaver Ltd', premium: '$1,000', coverage: '$120,000 maturity benefit', terms: 'Matures after 15 years. Guaranteed return of premium at maturity.' },
      { name: 'FutureGuard Inc', premium: '$950', coverage: '$110,000 maturity benefit', terms: 'Includes bonus on maturity. Policy loans available.' },
      { name: 'WealthSecure', premium: '$1,100', coverage: '$130,000 maturity benefit', terms: 'Matures after 25 years. Includes life cover and savings.' },
      { name: 'SafeFuture Endow', premium: '$980', coverage: '$115,000 maturity benefit', terms: 'Matures after 20 years. Includes flexible premium payments.' },
      { name: 'EndowPlus Inc', premium: '$1,050', coverage: '$125,000 maturity benefit', terms: 'Includes accident benefit rider. Matures after 20 years.' },
      { name: 'FutureLife', premium: '$900', coverage: '$105,000 maturity benefit', terms: 'Matures after 15 years. Includes bonus payments.' },
      { name: 'SecureEndow', premium: '$1,200', coverage: '$140,000 maturity benefit', terms: 'Matures after 30 years. Includes guaranteed payout and loan option.' },
      { name: 'Endowment Wealth', premium: '$1,100', coverage: '$130,000 maturity benefit', terms: 'Includes education fund. Matures after 20 years.' },
      { name: 'EndowGuard', premium: '$1,000', coverage: '$120,000 maturity benefit', terms: 'Matures after 20 years. Flexible premium payment options.' }
    ]
  }

  const productData = {
    'Motor Insurance': [
      'AutoGuard Ltd', 'SafeDrive Inc', 'MotorSecure', 'RoadCover Co.',
      'DriveSure Ltd', 'FastTrack Ins.', 'AutoProtect', 'SafeCar Inc.',
      'AutoShield', 'RoadSafe Ins.'
    ],
    'Health Insurance': [
      'HealthyLife', 'HealthPlus Inc', 'WellnessCare', 'MedSure Ltd',
      'VitalHealth', 'HealthGuard', 'SafeHealth Inc', 'MedSecure Ltd',
      'HealthPro', 'LifeCare Ins.'
    ],
    'Home Insurance': [
      'HomeProtect', 'SafeHome Ltd', 'SecureNest', 'GuardHome Inc',
      'SafeShelter', 'HouseSafe Ins.', 'ProtectNest', 'ShelterGuard',
      'SafeHouse Ltd', 'NestGuard'
    ],
    'Term Life Insurance': [
      'SecureLife Ltd', 'SafeTerm Inc', 'LifeGuard Insurance', 'TermCare Co.',
      'LifeProtect Inc', 'GuardianLife', 'SafeGuard Life', 'ShieldLife',
      'SafeFuture Ltd', 'ProtectNow'
    ],
    'Whole Life Insurance': [
      'LifeLong Ltd', 'ForeverSecure Inc', 'WholeLife Guardian', 'LifetimeCare',
      'SecureLife Whole', 'Guardian WholeLife', 'LifeShield', 'SafeHeritage',
      'LifetimeProtect', 'LegacyGuard'
    ],
    'Endowment Insurance': [
      'Endowment Secure', 'LifeSaver Ltd', 'FutureGuard Inc', 'WealthSecure',
      'SafeFuture Endow', 'ProtectEndow', 'GuardianEndow', 'SecurePlan Inc',
      'EndowmentPlus', 'LifeSecure Ltd'
    ]
  };

  /*Elements*/
  const productTypeSelect = document.getElementById('product-type');
  const companySelect = document.getElementById('company');
  const comparisonResults = document.getElementById('comparison-results');

  /*Populate product type dropdown*/
  for (const productType in insuranceData) {
    const option = document.createElement('option');
    option.value = productType;
    option.textContent = productType;
    productTypeSelect.appendChild(option);
  }

  /*Event listener for product type change*/
  productTypeSelect.addEventListener('change', function () {
    const selectedProductType = this.value;
    companySelect.innerHTML = ''; /*Clear previous options*/

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

  /*Form submission handling*/
  document.getElementById('compare-form').addEventListener('submit', function (event) {
    event.preventDefault(); /*Prevent default form submission*/

    const productType = productTypeSelect.value;
    const company = companySelect.value;

    if (productType && company) {
      const selectedProduct = insuranceData[productType].find(p => p.name === company);

      if (selectedProduct) {
        comparisonResults.innerHTML = `
                  <h3>Comparison Results</h3>
                  <p><strong>Product Type:</strong> ${productType}</p>
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

