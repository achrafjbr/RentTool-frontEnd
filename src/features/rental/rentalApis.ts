import { api } from "../../config/axios";
import type { FailureResponse } from "../../types/failureResoponse";
import type { SuccessResponse } from "../../types/successResponse";
import type { Rental, RentToolParams } from "./rentalTypes";

// Locataire / Renter
export const renteToolApi = async ({
  tool,
  startDate,
  endDate,
}: RentToolParams) => {
  try {
    return (
      await api.post<SuccessResponse<Rental>>("/rental/", {
        tool,
        startDate,
        endDate,
      })
    ).data;
  } catch (error) {
    throw error as FailureResponse;
  }
};

export const getRequestsSentByRenterApi = async () => {
  try {
    const response = (
      await api.get<SuccessResponse<Rental[]>>("/rental/my-requests")
    ).data;
    return response;
  } catch (error) {
    throw error as FailureResponse;
  }
};

export const returnRentRequestApi = async (rentalId: string) => {
  try {
    const response = (
      await api.patch<SuccessResponse<Rental>>(`/rental/${rentalId}/return`)
    ).data;
    return response;
  } catch (error) {
    throw error as FailureResponse;
  }
};

// Propiétaire/ Owner.
export const getRequestsReceivedByOwnerApi = async () => {
  try {
    const response = (
      await api.get<SuccessResponse<Rental[]>>(`/rental/received-requests`)
    ).data;
    return response;
  } catch (error) {
    throw error as FailureResponse;
  }
};

export const approveRentRequestApi = async (rentalId: string) => {
  try {
    const response = (
      await api.patch<SuccessResponse<Rental>>(`/rental/${rentalId}/approve`)
    ).data;
    return response;
  } catch (error) {
    throw error as FailureResponse;
  }
};

export const rejectRentRequestApi = async (rentalId: string) => {
  try {
    const response = (
      await api.patch<SuccessResponse<Rental>>(`/rental/${rentalId}/reject`)
    ).data;
    return response;
  } catch (error) {
    throw error as FailureResponse;
  }
};

export const confirmReturnRentRequestApi = async (rentalId: string) => {
  try {
    const response = (
      await api.patch<SuccessResponse<Rental>>(
        `/rental/${rentalId}/confirm-return`,
      )
    ).data;
    return response;
  } catch (error) {
    throw error as FailureResponse;
  }
};

export const ownerGainsApi = async () => {
  try {
    const response = (
      await api.get<SuccessResponse<{ totalRevenue: number }>>(`/rental/gains`)
    ).data;
    return response;
  } catch (error) {
    throw error as FailureResponse;
  }
};
