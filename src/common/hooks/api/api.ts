import axios, { AxiosResponse } from "axios";
import {
  GetOptions,
  PostOptions,
  DeleteOptions,
  PatchOptions,
} from "@/common/hooks/api/types/request-options";
import { ApiResponse } from "@/common/hooks/api/types/response-types";

export const useApi = () => {
  const GET = async <T>(
    options: GetOptions
  ): Promise<AxiosResponse<ApiResponse<T>>> => {
    try {
      const res = await axios({
        method: "GET",
        url: options.endpoint,
        params: options.query,
      });
      return res.data;
    } catch (error: unknown) {
      console.log(error);
      throw error;
    }
  };

  const POST = async <T>(options: PostOptions): Promise<object> => {
    try {
      const res = await axios({
        method: "POST",
        url: options.endpoint,
        data: options.data,
        params: options.query,
      });
      return res.data;
    } catch (error: unknown) {
      console.log(error);
      throw error;
    }
  };

  const DELETE = async <T>(
    options: DeleteOptions
  ): Promise<AxiosResponse<ApiResponse<T>>> => {
    try {
      const res = await axios({
        method: "DELETE",
        url: options.endpoint,
        params: options.query,
      });
      return res.data;
    } catch (error: unknown) {
      console.log(error);
      throw error;
    }
  };

  const PATCH = async <T>(
    options: PatchOptions
  ): Promise<AxiosResponse<ApiResponse<T>>> => {
    try {
      const res = await axios({
        method: "PATCH",
        data: options.data,
        url: options.endpoint,
        params: options.query,
      });
      return res.data;
    } catch (error: unknown) {
      console.log(error);
      throw error;
    }
  };

  return { GET, POST, DELETE, PATCH };
};
