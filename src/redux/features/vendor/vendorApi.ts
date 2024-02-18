import { baseAPI } from "../../api/baseAPI";

const vendorApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    vendorRegistration: builder.mutation({
      query: (vendorInfo) => {
        return {
          url: "/users/vendor/register",
          method: "POST",
          body: vendorInfo,
        };
      },
    }),
  }),
});

export const { useVendorRegistrationMutation } = vendorApi;
