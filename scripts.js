document.addEventListener('DOMContentLoaded', function () {
  const insuranceTypeSelect = document.getElementById('insurance-type');
  const productTypeSelect = document.getElementById('product-type');
  const companySelect = document.getElementById('company');
  const comparisonResults = document.getElementById('comparison-results');

  // Embed data from data.json
  const insuranceData = {
    "Non-Life Insurance": {
      "Motor Insurance": [
        {
          "Company": "AutoGuard Ltd",
          "Premium (Annual)": "$500",
          "Coverage": "$50,000 for vehicle damage/theft",
          "Terms & Conditions": "Max coverage for cars under 10 years old. 5% deductible for claims."
        },
        {
          "Company": "SafeDrive Inc",
          "Premium (Annual)": "$450",
          "Coverage": "$45,000 for vehicle damage/theft",
          "Terms & Conditions": "Only for drivers aged 25-60. 10% increase for high-risk drivers."
        },
        {
          "Company": "MotorSecure",
          "Premium (Annual)": "$600",
          "Coverage": "$60,000 for vehicle damage/theft",
          "Terms & Conditions": "Includes roadside assistance. Max 3 claims per year."
        },
        {
          "Company": "RoadCover Co.",
          "Premium (Annual)": "$525",
          "Coverage": "$55,000 for vehicle damage/theft",
          "Terms & Conditions": "No coverage for off-road vehicles. Rental car coverage for 10 days."
        },
        {
          "Company": "DriveSure Ltd",
          "Premium (Annual)": "$480",
          "Coverage": "$50,000 for vehicle damage/theft",
          "Terms & Conditions": "Covers hail damage but excludes flood damage. 15% deductible for claims."
        },
        {
          "Company": "FastTrack Ins.",
          "Premium (Annual)": "$510",
          "Coverage": "$45,000 for vehicle damage/theft",
          "Terms & Conditions": "Includes free car wash and tire protection. Max 2 claims per year."
        },
        {
          "Company": "AutoProtect",
          "Premium (Annual)": "$450",
          "Coverage": "$48,000 for vehicle damage/theft",
          "Terms & Conditions": "Excludes exotic cars. Includes breakdown cover for cars under 5 years old."
        },
        {
          "Company": "SafeCar Inc.",
          "Premium (Annual)": "$550",
          "Coverage": "$58,000 for vehicle damage/theft",
          "Terms & Conditions": "Coverage for new cars only. Zero deductible in the first year."
        },
        {
          "Company": "AutoShield",
          "Premium (Annual)": "$575",
          "Coverage": "$60,000 for vehicle damage/theft",
          "Terms & Conditions": "No claims discount applies after 2 claim-free years."
        },
        {
          "Company": "RoadSafe Ins.",
          "Premium (Annual)": "$490",
          "Coverage": "$48,000 for vehicle damage/theft",
          "Terms & Conditions": "5% premium discount for eco-friendly vehicles."
        }
      ],
      "Health Insurance": [
        {
          "Company": "HealthyLife",
          "Premium (Annual)": "$1,200",
          "Coverage": "$100,000 for hospitalization",
          "Terms & Conditions": "Coverage for in-patient only. No pre-existing conditions coverage for 2 years."
        },
        {
          "Company": "HealthPlus Inc",
          "Premium (Annual)": "$1,500",
          "Coverage": "$120,000 for medical expenses",
          "Terms & Conditions": "Includes dental and vision coverage. 20% co-payment on specialist visits."
        },
        {
          "Company": "WellnessCare",
          "Premium (Annual)": "$1,000",
          "Coverage": "$80,000 for hospitalization",
          "Terms & Conditions": "Coverage limited to private hospitals. 25% co-payment on all procedures."
        },
        {
          "Company": "MedSure Ltd",
          "Premium (Annual)": "$1,300",
          "Coverage": "$110,000 for hospitalization and surgery",
          "Terms & Conditions": "Includes maternity care after 1 year. Max claim limit of $50,000 per year."
        },
        {
          "Company": "VitalHealth",
          "Premium (Annual)": "$900",
          "Coverage": "$75,000 for medical expenses",
          "Terms & Conditions": "Excludes pre-existing conditions for the first 3 years."
        },
        {
          "Company": "HealthGuard",
          "Premium (Annual)": "$1,400",
          "Coverage": "$115,000 for surgery and hospitalization",
          "Terms & Conditions": "Covers up to 3 dependents for free. 15% co-payment on elective procedures."
        },
        {
          "Company": "SafeHealth Inc",
          "Premium (Annual)": "$1,200",
          "Coverage": "$90,000 for hospitalization",
          "Terms & Conditions": "Includes mental health coverage. 10% deductible for surgeries."
        },
        {
          "Company": "MedSecure Ltd",
          "Premium (Annual)": "$950",
          "Coverage": "$80,000 for medical expenses",
          "Terms & Conditions": "No dental or vision coverage. 30% co-payment on all visits."
        },
        {
          "Company": "HealthPro",
          "Premium (Annual)": "$1,600",
          "Coverage": "$130,000 for hospitalization and surgery",
          "Terms & Conditions": "Maternity coverage starts after 6 months. Max coverage of $60,000 per claim."
        },
        {
          "Company": "LifeCare Ins.",
          "Premium (Annual)": "$1,250",
          "Coverage": "$100,000 for medical expenses",
          "Terms & Conditions": "Free annual check-up. Pre-existing conditions covered after 1 year."
        }
      ],
      "Home Insurance": [
        {
          "Company": "HomeProtect",
          "Premium (Annual)": "$700",
          "Coverage": "$200,000 for property and contents",
          "Terms & Conditions": "Covers fire, theft, and flood. 15% deductible on claims."
        },
        {
          "Company": "SafeHome Ltd",
          "Premium (Annual)": "$650",
          "Coverage": "$180,000 for property and contents",
          "Terms & Conditions": "Excludes flood damage. 20% deductible for natural disaster claims."
        },
        {
          "Company": "SecureNest",
          "Premium (Annual)": "$750",
          "Coverage": "$220,000 for property and contents",
          "Terms & Conditions": "Includes coverage for jewelry and electronics. Max 3 claims per year."
        },
        {
          "Company": "GuardHome Inc",
          "Premium (Annual)": "$800",
          "Coverage": "$230,000 for property and contents",
          "Terms & Conditions": "Coverage for homes under 20 years old. Includes garden and shed coverage."
        },
        {
          "Company": "SafeShelter",
          "Premium (Annual)": "$720",
          "Coverage": "$190,000 for property and contents",
          "Terms & Conditions": "No coverage for homes near water bodies. 10% deductible for burglary claims."
        },
        {
          "Company": "HouseSafe Ins.",
          "Premium (Annual)": "$675",
          "Coverage": "$210,000 for property and contents",
          "Terms & Conditions": "Includes coverage for accidental damage. Max 2 claims per year."
        },
        {
          "Company": "ProtectNest",
          "Premium (Annual)": "$820",
          "Coverage": "$240,000 for property and contents",
          "Terms & Conditions": "Covers renovations and extensions. 25% deductible for luxury items."
        },
        {
          "Company": "ShelterGuard",
          "Premium (Annual)": "$700",
          "Coverage": "$200,000 for property and contents",
          "Terms & Conditions": "Excludes earthquake coverage. Free annual safety inspection."
        },
        {
          "Company": "SafeHouse Ltd",
          "Premium (Annual)": "$770",
          "Coverage": "$220,000 for property and contents",
          "Terms & Conditions": "Covers damages due to pets. Includes protection for high-value items."
        },
        {
          "Company": "NestGuard",
          "Premium (Annual)": "$780",
          "Coverage": "$230,000 for property and contents",
          "Terms & Conditions": "Includes home office coverage. Max 3 claims per year."
        }
      ]
    },
    "Life Insurance": {
      "Term Life Insurance": [
        {
          "Company": "SecureLife Ltd",
          "Premium (Annual)": "$500",
          "Coverage": "$200,000 death benefit",
          "Terms & Conditions": "10-year term. No payout after the term ends."
        },
        {
          "Company": "SafeTerm Inc",
          "Premium (Annual)": "$450",
          "Coverage": "$180,000 death benefit",
          "Terms & Conditions": "20-year term. No surrender value after the term."
        },
        {
          "Company": "LifeGuard Insurance",
          "Premium (Annual)": "$550",
          "Coverage": "$250,000 death benefit",
          "Terms & Conditions": "15-year term. Premiums increase every 5 years."
        },
        {
          "Company": "TermCare Co.",
          "Premium (Annual)": "$600",
          "Coverage": "$300,000 death benefit",
          "Terms & Conditions": "5-year renewable term. 10% premium discount for healthy lifestyle."
        },
        {
          "Company": "LifeSecure Ltd",
          "Premium (Annual)": "$520",
          "Coverage": "$220,000 death benefit",
          "Terms & Conditions": "Term ends at age 70. Includes accidental death benefit."
        },
        {
          "Company": "SafeLife Inc.",
          "Premium (Annual)": "$480",
          "Coverage": "$200,000 death benefit",
          "Terms & Conditions": "No coverage for high-risk occupations. Includes waiver of premium rider."
        },
        {
          "Company": "SecureTerm Ins.",
          "Premium (Annual)": "$550",
          "Coverage": "$250,000 death benefit",
          "Terms & Conditions": "10-year term. Premiums remain fixed."
        },
        {
          "Company": "TermLife Pro",
          "Premium (Annual)": "$600",
          "Coverage": "$300,000 death benefit",
          "Terms & Conditions": "Coverage for smokers and non-smokers. Renewable every 5 years."
        },
        {
          "Company": "LifeProtect Ltd",
          "Premium (Annual)": "$490",
          "Coverage": "$220,000 death benefit",
          "Terms & Conditions": "10-year term. Includes terminal illness coverage."
        },
        {
          "Company": "TermGuard Inc.",
          "Premium (Annual)": "$530",
          "Coverage": "$230,000 death benefit",
          "Terms & Conditions": "Coverage includes critical illness rider."
        }
      ],
      "Whole Life Insurance": [
        {
          "Company": "LifeLong Ltd",
          "Premium (Annual)": "$1,200",
          "Coverage": "$500,000 lifetime coverage",
          "Terms & Conditions": "Guaranteed death benefit and cash value accumulation. Fixed premium."
        },
        {
          "Company": "ForeverSecure Inc",
          "Premium (Annual)": "$1,300",
          "Coverage": "$600,000 lifetime coverage",
          "Terms & Conditions": "Includes dividends. Premiums increase with age."
        },
        {
          "Company": "WholeLife Guardian",
          "Premium (Annual)": "$1,400",
          "Coverage": "$700,000 lifetime coverage",
          "Terms & Conditions": "Includes accelerated death benefit. Cash value grows at a fixed rate."
        },
        {
          "Company": "LifetimeCare",
          "Premium (Annual)": "$1,500",
          "Coverage": "$750,000 lifetime coverage",
          "Terms & Conditions": "Coverage for whole life. 10% premium discount for non-smokers."
        },
        {
          "Company": "LifeSecure",
          "Premium (Annual)": "$1,100",
          "Coverage": "$500,000 lifetime coverage",
          "Terms & Conditions": "Fixed premiums. Includes living benefits rider."
        },
        {
          "Company": "Everlasting Life Ltd",
          "Premium (Annual)": "$1,350",
          "Coverage": "$650,000 lifetime coverage",
          "Terms & Conditions": "Includes optional long-term care rider. Premiums increase annually."
        },
        {
          "Company": "SecureLifetime",
          "Premium (Annual)": "$1,250",
          "Coverage": "$600,000 lifetime coverage",
          "Terms & Conditions": "Includes no-lapse guarantee. Cash value grows based on dividends."
        },
        {
          "Company": "LifeAssure Inc",
          "Premium (Annual)": "$1,400",
          "Coverage": "$700,000 lifetime coverage",
          "Terms & Conditions": "Includes optional riders for accidental death and disability."
        },
        {
          "Company": "GuardianLife",
          "Premium (Annual)": "$1,300",
          "Coverage": "$650,000 lifetime coverage",
          "Terms & Conditions": "Fixed premiums. Includes guaranteed insurability rider."
        },
        {
          "Company": "LifePlus Ltd",
          "Premium (Annual)": "$1,200",
          "Coverage": "$550,000 lifetime coverage",
          "Terms & Conditions": "Includes living benefits and flexible premium options."
        }
      ],
      "Endowment Insurance": [
        {
          "Company": "Endowment Secure",
          "Premium (Annual)": "$1,000",
          "Coverage": "$400,000 at maturity or death",
          "Terms & Conditions": "20-year policy. Guaranteed payout at maturity or in case of death."
        },
        {
          "Company": "LifeSaver Ltd",
          "Premium (Annual)": "$1,200",
          "Coverage": "$450,000 at maturity or death",
          "Terms & Conditions": "Includes bonus payouts. 15-year policy term."
        },
        {
          "Company": "FutureGuard Inc",
          "Premium (Annual)": "$1,100",
          "Coverage": "$425,000 at maturity or death",
          "Terms & Conditions": "Guaranteed payout and additional returns based on performance."
        },
        {
          "Company": "WealthSecure",
          "Premium (Annual)": "$1,300",
          "Coverage": "$500,000 at maturity or death",
          "Terms & Conditions": "Includes inflation protection. 20-year term with annual reviews."
        },
        {
          "Company": "SafeFuture Endow",
          "Premium (Annual)": "$1,050",
          "Coverage": "$420,000 at maturity or death",
          "Terms & Conditions": "Includes education fund rider. Fixed premium."
        },
        {
          "Company": "EndowmentPlus",
          "Premium (Annual)": "$1,150",
          "Coverage": "$450,000 at maturity or death",
          "Terms & Conditions": "Guaranteed payout with additional bonuses. 15-year policy."
        },
        {
          "Company": "FutureLife",
          "Premium (Annual)": "$1,000",
          "Coverage": "$400,000 at maturity or death",
          "Terms & Conditions": "Includes flexible payment options. Max 2 claims per year."
        },
        {
          "Company": "EndowLife",
          "Premium (Annual)": "$1,250",
          "Coverage": "$475,000 at maturity or death",
          "Terms & Conditions": "Includes rider for critical illness. Payout at maturity or death."
        },
        {
          "Company": "LifeFuture",
          "Premium (Annual)": "$1,300",
          "Coverage": "$500,000 at maturity or death",
          "Terms & Conditions": "Includes additional returns based on investment performance."
        },
        {
          "Company": "SecureFuture",
          "Premium (Annual)": "$1,100",
          "Coverage": "$425,000 at maturity or death",
          "Terms & Conditions": "20-year policy with guaranteed payout and optional riders."
        }
      ]
    }
  };

  // Populate the product type dropdown
  function populateProductDropdown(type) {
    const products = insuranceData[type] || {};
    productTypeSelect.innerHTML = '<option value="">Select Product</option>';
    companySelect.innerHTML = '<option value="">Select Company</option>';
    productTypeSelect.disabled = false;
    companySelect.disabled = true;

    for (const product in products) {
        const option = document.createElement('option');
        option.value = product;
        option.textContent = product;
        productTypeSelect.appendChild(option);
    }
}

function populateCompanyDropdown(productType) {
    const productData = insuranceData[insuranceTypeSelect.value][productType] || [];
    companySelect.innerHTML = '<option value="">Select Company</option>';
    companySelect.disabled = false;

    productData.forEach(item => {
        const option = document.createElement('option');
        option.value = item.Company;
        option.textContent = item.Company;
        companySelect.appendChild(option);
    });
}

insuranceTypeSelect.addEventListener('change', function () {
    populateProductDropdown(this.value);
});

productTypeSelect.addEventListener('change', function () {
    populateCompanyDropdown(this.value);
});

document.getElementById('compare-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const type = insuranceTypeSelect.value;
    const product = productTypeSelect.value;
    const company = companySelect.value;
    
    if (type && product && company) {
        const productData = insuranceData[type][product] || [];
        const selectedProduct = productData.find(item => item.Company === company);
        
        if (selectedProduct) {
            comparisonResults.innerHTML = `
                <h3>Comparison Results</h3>
                <p><strong>Product Type:</strong> ${type}</p>
                <p><strong>Product:</strong> ${product}</p>
                <p><strong>Company:</strong> ${company}</p>
                <p><strong>Premium (Annual):</strong> ${selectedProduct["Premium (Annual)"]}</p>
                <p><strong>Coverage:</strong> ${selectedProduct.Coverage}</p>
                <p><strong>Terms & Conditions:</strong> ${selectedProduct["Terms & Conditions"]}</p>
            `;
        } else {
            comparisonResults.innerHTML = '<p>No data available for the selected company.</p>';
        }
    } else {
        comparisonResults.innerHTML = '<p>Please select all options to compare.</p>';
    }
});
});
