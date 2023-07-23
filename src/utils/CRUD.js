import axios from "axios";
import {
  loginError,
  loginStart,
  loginSuccess,
  registerStart,
  registerSuccess,
  registerError,
} from "../redux/authSlice";

const host = "https://dribble-be-clone.vercel.app";

export const refeshToken = async (token) => {
  try {
    const res = await axios.get(host + "/api/auth/refesh", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const login = async (data, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(host + "/api/auth/signin", data);
    dispatch(loginSuccess(res.data));
    navigate("/");
  } catch (error) {
    console.log(error);
    dispatch(loginError());
  }
};
export const signup = async (data, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    const res = await axios.post(host + "/api/auth/signup", data);
    dispatch(registerSuccess());
    delete data.name;
    login(data, dispatch, navigate);
  } catch (error) {
    dispatch(registerError());
  }
};
export const getShorts = async (variable) => {
  try {
    const res = await axios.get(host + "/api/v1/short/" + variable);
    return res;
  } catch (error) {
    console.error(error);
  }
};
export const getShortById = async (id) => {
  try {
    const res = await axios.get(host + "/api/v1/short/" + id);
    return res;
  } catch (error) {
    console.error(error);
  }
};
export const postNewShort = async (data, axiosJWT, token) => {
  try {
    const res = await axiosJWT.post(host + "/api/v1/short/addShort", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    console.error(error);
  }
};
export const postNewCollections = async (data, axiosJWT, token) => {
  try {
    const res = await axiosJWT.post(host + "/api/v1/collection/", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    console.error(error);
  }
};
export const getAllCollections = async (variable) => {
  try {
    const res = await axios.get(host + "/api/v1/collection" + variable);
    return res;
  } catch (error) {
    console.error(error);
  }
};
export const getAllCollectionById = async (id) => {
  try {
    const res = await axios.get(host + "/api/v1/collection/" + id);
    return res;
  } catch (error) {
    console.error(error);
  }
};
export const updateInfoCollectionById = async (id, data, axiosJWT, token) => {
  try {
    const res = await axiosJWT.patch(host + "/api/v1/collection/" + id, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    console.error(error);
  }
};
export const updateShortInCollectionById = async (
  id,
  data,
  axiosJWT,
  token
) => {
  try {
    const res = await axiosJWT.patch(
      host + "/api/v1/collection/updateShort/" + id,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res;
  } catch (error) {
    console.error(error);
  }
};
export const deleteCollectionById = async (id, axiosJWT, token) => {
  try {
    const res = await axiosJWT.delete(host + "/api/v1/collection/" + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    console.error(error);
  }
};
export const getAllJobs = async (variable) => {
  try {
    const res = await axios.get(host + "/api/v1/job/" + variable);
    return res;
  } catch (error) {
    console.error(error);
  }
};
export const getJobById = async (id) => {
  try {
    const res = await axios.get(host + "/api/v1/job/" + id);
    return res;
  } catch (error) {
    console.error(error);
  }
};
export const postNewJobs = async (data, axiosJWT, token) => {
  try {
    const res = await axiosJWT.post(
      host + "/api/v1/job/",
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res;
  } catch (error) {
    console.error(error);
  }
};
export const updateApplyJob = async (id, axiosJWT, token) => {
  try {
    const res = await axiosJWT.patch(
      host + "/api/v1/job/apply/" + id,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res;
  } catch (error) {
    console.error(error);
  }
};
export const getProfileById = async (id) => {
  try {
    const res = await axios.get(host + "/api/v1/user/info/" + id);
    return res;
  } catch (error) {
    console.error(error);
  }
};
export const updateFollowing = async (id, axiosJWT, token) => {
  try {
    const res = await axiosJWT.patch(
      host + "/api/v1/user/update/follow/" + id,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(res.data);
    return res;
  } catch (error) {
    console.error(error);
  }
};
export const updateLikeShort = async (id, axiosJWT, token) => {
  try {
    const res = await axiosJWT.patch(
      host + "/api/v1/short/like/" + id,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res;
  } catch (error) {
    console.error(error);
  }
}
export const updateInfo = async (data, axiosJWT, token) => {
  try {
    const res = await axiosJWT.patch(
      host + "/api/v1/user/update/info",
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res;
  } catch (error) {
    console.error(error);
  }
}
export const updatePassword = async (data, axiosJWT, token) => {
  try {
    const res = await axiosJWT.patch(
      host + "/api/v1/user/update/password",
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res;
  } catch (error) {
    console.error(error);
  }
}
export const updateSocials = async (data, axiosJWT, token) => {
  try {
    const res = await axiosJWT.patch(
      host + "/api/v1/user/update/socials",
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res;
  } catch (error) {
    console.error(error);
  }
}
export const updateSkills = async (data, axiosJWT, token) => {
  try {
    const res = await axiosJWT.patch(
      host + "/api/v1/user/update/skills",
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res;
  } catch (error) {
    console.error(error);
  }
}
export const getAllAddress = async () => {
  try {
    const res = await axios.get(host + "/api/v1/address");
    return res;
  } catch (error) {
    console.error(error);
  }
};
export const getAllCreativeField = async () => {
  try {
    const res = await axios.get(host + "/api/v1/creative");
    return res;
  } catch (error) {
    console.error(error);
  }
};
export const getAllHire = async (data) => {
  try {
    const res = await axios.post(host + "/api/v1/hire", data);
    return res;
  } catch (error) {
    console.error(error);
  }
}
export const uploadFile = async (data, setUpdateProgress) => {
  try {
    const res = await axios.post(host + "/api/v1/short/addImage", data, {
      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        setUpdateProgress(percentCompleted);
        if(percentCompleted == 100) {
          setTimeout(() => {
            setUpdateProgress(0);
          }, 1000);
        }
      },
    });
    return res;
  } catch (error) {
    console.error(error);
  }
}
export const getAllTags = async () => {
  try {
    const res = await axios.get(host + "/api/v1/tag");
    return res;
  } catch (error) {
    console.error(error);
  }
};
export const getCommentByIdShort = async (id) => {
  try {
    const res = await axios.get(host + "/api/v1/comment/" + id);
    return res;
  } catch (error) {
    console.error(error);
  }
}
export const postNewComment = async (data, axiosJWT, token) => {
  try {
    const res = await axiosJWT.post(
      host + "/api/v1/comment/",
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res;
  } catch (error) {
    console.error(error);
  }
};