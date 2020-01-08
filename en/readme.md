## Description

### Pre-sort products on comparison page

```
@param {string} sort_products_by
    Optional.
    If the variable's value will not equal to one of the accepted values,
        products will be sorted by their rating.
    Accepts: 'cost'.
    Default: nil.
```

---

### Pre-filter products on comparison page

```
@param {array} preselected_filters
    Optional.
    Be aware, do not set multiple values that belong to the same <select>.
    Accepts:
        'tradesmen',
        'freelancer',
        'sole-proprietors',
        'sole-traders',
        'partnership-ucivil-law',
        'gmbh-kgaa-ag',
        'limited-partnership',
        'limited',
        'general-partnership',
        'ug-limited-liability',
        'partnership-company',
        'other',
        'association',
        'cooperatives',
        'sidehustle',
        'new-company',
        'small-company',
        'medium-company',
        'big-company',
        'cash-card',
        'credit-card',
        'deposit-insurance-country',
        'withdrawal-fee',
        'schufa'.
    Default: nil.
```
