export const baseUrl = process.env.NEXT_APP_BASE_URL;
export const baseUrlApi = `${process.env.NEXT_APP_BASE_URL}/api/`;
export const baseUrlMedia = process.env.NEXT_APP_BASE_URL;

export const mediaUrl = (url: string) => {
  return `${baseUrlMedia}/uploads/${url}`;
};

export const endpoints = {
  auth: {
    signup: 'user/existence',
    signUpProfile: 'user/signup',
    login: 'user/login',
    profileDetails: 'user/profile/get',
    profileUpdate: 'user/profile/update',
  },
  cms: {
    about: 'aboutpolicy/details',
    faq: 'faq/all',
  },
  publisher: {
    getall: 'publishers/',
    getbyid: 'publishers/:id',
    create: 'publishers/',
    update: 'publishers/:id',
    delete: 'publishers/:id',
  },
};

export const sucessNotificationEndPoints = [
  // endpoints.auth.signup,
  endpoints.auth.signUpProfile,
  endpoints.auth.login,
  endpoints.auth.profileUpdate,
  endpoints.publisher.create,
  endpoints.publisher.update,
  endpoints.publisher.delete,
  endpoints.publisher.getall,
  endpoints.publisher.getbyid,
];
