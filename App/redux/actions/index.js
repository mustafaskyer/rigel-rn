export { appStateAction } from "./AppStateAction";
export { addNotification, clearNotifications } from "./NotificationsAction";
// don't remove this line #imp

export const action = (type, payload) => {
    return { type, payload }
}