import { RouteLocationRaw } from 'vue-router';

export interface Menu {
  mName: String,
  requestKey?: String,
  route?:RouteLocationRaw
}
