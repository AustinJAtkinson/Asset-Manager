const ASSET_ENDPOINT =
  "https://crudcrud.com/api/101a2e2292e04cd68b028ef44b51e92c/assets";

class AssetApi {
  get = async () => {
    try {
      const resp = await fetch(ASSET_ENDPOINT);
      return await resp.json();
    } catch (e) {
      console.log(e);
    }
  };
  createDepartment = async (department) => {
    try {
      const resp = await fetch(ASSET_ENDPOINT, {
        method: "POST",
        body: JSON.stringify(department),
        headers: { "Content-Type": "application/json" },
      });
      return await resp.json();
    } catch (e) {
      console.log(e);
    }
  };
  deleteDepartment = async (department) => {
    try {
      await fetch(`${ASSET_ENDPOINT}/${department._id}`, {
        method: "DELETE",
      });
    } catch (e) {
      console.log(e);
    }
  };
  updateDepartment = async (department) => {
    try {
      const departmentId = department._id;
      delete department._id;
      const resp = await fetch(`${ASSET_ENDPOINT}/${departmentId}`, {
        method: "PUT",
        body: JSON.stringify(department),
        headers: {
          "Content-Type": "application/json",
        },
      });
      return await resp.json();
    } catch (e) {
      console.log(e);
    }
  };
}

export const assetApi = new AssetApi();
