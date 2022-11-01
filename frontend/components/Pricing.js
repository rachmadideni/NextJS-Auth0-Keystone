import Image from "next/image";
import Link from "next/link";

export default function Pricing() {
  return (
    <>
      <div class="container py-3">
        <header>
          <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1 class="display-4 fw-normal">Pricing</h1>
            <p class="fs-5 text-muted">
              Here's a sample of our pricing. We offer a variety of plans to fit
              your needs.
            </p>
          </div>
        </header>

        <main>
          <div class="row row-cols-1 row-cols-md-2 mb-3 text-center">
            <div class="col">
              <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3">
                  <h4 class="my-0 fw-normal">Free</h4>
                </div>
                <div class="card-body">
                  <h1 class="card-title pricing-card-title">
                    $0<small class="text-muted fw-light">/mo</small>
                  </h1>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>10 users included</li>
                    <li>2 GB of storage</li>
                    <li>Email support</li>
                    <li>Help center access</li>
                  </ul>
                  <Link
                    type="link"
                    className={"w-100 btn btn-lg btn-outline-secondary"}
                    href="/checkout"
                  >
                    Get started for free
                  </Link>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3">
                  <h4 class="my-0 fw-normal">Basic</h4>
                </div>
                <div class="card-body">
                  <h1 class="card-title pricing-card-title">
                    $1<small class="text-muted fw-light">/mo</small>
                  </h1>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>20 users included</li>
                    <li>10 GB of storage</li>
                    <li>Priority email support</li>
                    <li>Help center access</li>
                  </ul>
                  <Link
                    type="link"
                    className={"w-100 btn btn-lg btn-primary"}
                    href="/checkout"
                  >
                    Enroll now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <h2 class="display-6 text-center mb-4">Compare plans</h2>

          <div class="table-responsive">
            <table class="table text-center">
              <thead>
                <tr>
                  <th width="40%"></th>
                  <th width="30%">Free</th>
                  <th width="30%">Basic</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" class="text-start">
                    Public
                  </th>
                  <td>
                    <Image
                      class="bi"
                      width="24"
                      height="24"
                      src="/check.svg"
                    ></Image>
                  </td>
                  <td>
                    <Image
                      class="bi"
                      width="24"
                      height="24"
                      src="/check.svg"
                    ></Image>
                  </td>
                </tr>
                <tr>
                  <th scope="row" class="text-start">
                    Private
                  </th>
                  <td></td>
                  <td>
                    <Image
                      class="bi"
                      width="24"
                      height="24"
                      src="/check.svg"
                    ></Image>
                  </td>
                </tr>

                <tr>
                  <th scope="row" class="text-start">
                    Permissions
                  </th>
                  <td></td>
                  <td>
                    <Image
                      class="bi"
                      width="24"
                      height="24"
                      src="/check.svg"
                    ></Image>
                  </td>
                </tr>
                <tr>
                  <th scope="row" class="text-start">
                    Sharing
                  </th>
                  <td>
                    <Image
                      class="bi"
                      width="24"
                      height="24"
                      src="/check.svg"
                    ></Image>
                  </td>
                  <td>
                    <Image
                      class="bi"
                      width="24"
                      height="24"
                      src="/check.svg"
                    ></Image>
                  </td>
                </tr>
                <tr>
                  <th scope="row" class="text-start">
                    Unlimited members
                  </th>
                  <td></td>
                  <td>
                    <Image
                      class="bi"
                      width="24"
                      height="24"
                      src="/check.svg"
                    ></Image>
                  </td>
                </tr>
                <tr>
                  <th scope="row" class="text-start">
                    Extra security
                  </th>
                  <td></td>

                  <td>
                    <Image
                      class="bi"
                      width="24"
                      height="24"
                      src="/check.svg"
                    ></Image>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  );
}
