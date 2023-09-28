import HttpService from "./http.service";

export default class carService {
  static async getAll(/* take = CONFIG.moviesPerPage, skip = 0, search = "" */) {
    return await HttpService.request({
      url: "/cars",
      method: "GET",
      /* params: { take, skip, search },
       */
    });
  }
}
