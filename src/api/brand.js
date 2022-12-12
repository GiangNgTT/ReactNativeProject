import axiosRequest from '.';

export async function getBrandApi() {
  let url = `https://61d6e1cf35f71e0017c2e86e.mockapi.io/products`;
  return axiosRequest.get(url);
}
