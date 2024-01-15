import { addViewToListingRoute } from "./addViewToListing";
import { getAllListingsRoute } from "./getAllListings";
import { getListingRoute } from "./getListing";
import { getUserListingsRoute } from "./getUserListings";
import { createNewListingRoute } from "./createNewListing";
import { updateListingRoute } from "./updateListing";

export default [createNewListingRoute, addViewToListingRoute, getAllListingsRoute, getListingRoute, getUserListingsRoute, updateListingRoute];
