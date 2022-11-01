

export default function Checkout() {
  return (
    <div class="container">
      <div class="py-5 text-center">
        <h2>Checkout form</h2>
        <p class="lead">Here's a checkout form...</p>
      </div>

      <div class="col-md-7 col-lg-8 mx-auto">
        <h4 class="mb-3">Billing address</h4>
        <form class="needs-validation">
          <div class="row g-3">
            <div class="col-sm-6">
              <label for="firstName" class="form-label">
                First name
              </label>
              <input
                type="text"
                class="form-control"
                id="firstName"
                placeHolder=""
                required
              />
              <div class="invalid-feedback">Valid first name is required.</div>
            </div>

            <div class="col-sm-6">
              <label for="lastName" class="form-label">
                Last name
              </label>
              <input
                type="text"
                class="form-control"
                id="lastName"
                placeHolder=""
                required
              />
              <div class="invalid-feedback">Valid last name is required.</div>
            </div>

            <div class="col-12">
              <label for="username" class="form-label">
                Username
              </label>
              <div class="input-group has-validation">
                <span class="input-group-text">@</span>
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  placeHolder="Username"
                  required
                />
                <div class="invalid-feedback">Your username is required.</div>
              </div>
            </div>

            <div class="col-12">
              <label for="email" class="form-label">
                Email <span class="text-muted">(Optional)</span>
              </label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeHolder="you@example.com"
              />
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div class="col-12">
              <label for="address" class="form-label">
                Address
              </label>
              <input
                type="text"
                class="form-control"
                id="address"
                placeHolder="1234 Main St"
                required
              />
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div class="col-12">
              <label for="address2" class="form-label">
                Address 2 <span class="text-muted">(Optional)</span>
              </label>
              <input
                type="text"
                class="form-control"
                id="address2"
                placeHolder="Apartment or suite"
              />
            </div>

            <div class="col-md-5">
              <label for="city" class="form-label">
                City
              </label>
              <input
                type="text"
                class="form-control"
                id="address"
                placeHolder="City"
                required
              />
              <div class="invalid-feedback">Please select a valid country.</div>
            </div>

            <div class="col-md-4">
              <label for="state" class="form-label">
                State
              </label>
              <select class="form-select" id="state" required>
                <option value="">Choose...</option>
                <option>California</option>
                <option>Florida</option>
                <option>Tennessee</option>
              </select>
              <div class="invalid-feedback">Please provide a valid state.</div>
            </div>

            <div class="col-md-3">
              <label for="zip" class="form-label">
                Zip
              </label>
              <input
                type="text"
                class="form-control"
                id="zip"
                placeHolder=""
                required
              />
              <div class="invalid-feedback">Zip code required.</div>
            </div>
          </div>

          <hr class="my-4" />

          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="same-address" />
            <label class="form-check-label" for="same-address">
              Shipping address is the same as my billing address
            </label>
          </div>

          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="save-info" />
            <label class="form-check-label" for="save-info">
              Save this information for next time
            </label>
          </div>

          <hr class="my-4" />

          <button class="w-100 btn btn-primary btn-lg" type="submit">
            Continue to checkout
          </button>
        </form>
      </div>
    </div>
  );
}
