
function Product(plan, price, users, storage) {
    this.plan = plan;
    this.price = price;
    this.users = users;
    this.storage = storage;
    this.hasEmailAccess = true;
    this.hasHelpCenterAccess = true;
}

const plans = [
    new Product('Free', '0', 10, 2),
    new Product('Pro', '15', 20, 5),
    new Product('Premium', '29', 30, 10)
];

const cardsElement = document.getElementById('cards');

function buildCard(plan) {
    cardsElement.innerHTML +=
        `<div class="card">
    <div class="card-header">
    <h4>${plan.plan}</h4>
    </div>
    <div class="card-body">
    <h3>$${plan.price}/mo</h3>
    <p>${plan.users} users included</p>
    <p>${plan.storage} GB of storage</p>
    ${plan.hasEmailAccess ? '<p>Email support</p>' : ''}
    ${plan.hasHelpCenterAccess ? '<p>Help center Access</p>' : ''}
    <button>${plan.price > 0 ? 'Get started' : 'Sign up for free'}</button>
    </div>
    </div>`;
}

plans.forEach(buildCard);