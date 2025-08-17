import { baseApi } from '@/redux/baseApi'
import type { IResponse } from '@/types'
import type { ILogin, ISendOtp, IVerifyOtp } from '@/types/auth.type'
const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<IResponse<null>, ILogin>({
            query: (userInfo) => ({
                url: "/auth/login",
                method: "POST",
                data: userInfo
            })
        }),
        register: builder.mutation({
            query: (userInfo) => ({
                url: "/user/register",
                method: "POST",
                data: userInfo
            })
        }),
        sendOtp: builder.mutation<IResponse<null>, ISendOtp>({
            query: (userInfo) => ({
                url: "/otp/send",
                method: "POST",
                data: userInfo,
            }),
        }),
        verifyOtp: builder.mutation<IResponse<null>, IVerifyOtp>({
            query: (userInfo) => ({
                url: "/otp/verify",
                method: "POST",
                data: userInfo,
            }),
        }),
        userInfo: builder.query({
            query: () => ({
                url: "/user/me",
                method: "GET",
            }),
            providesTags: ["USER"],
        }),
    }),
})

export const { useRegisterMutation, useLoginMutation, useSendOtpMutation, useVerifyOtpMutation } = authApi