export enum LogTypes {
  Error,
  Info,
  Debug,
  Warning,
}

export const Log = (type: LogTypes, message: string, extraData: object = null) => {
  switch (type) {
    case LogTypes.Error:
      extraData ? console.error(message, extraData) : console.error(message);
      break;
    case LogTypes.Warning:
      extraData ? console.warn(message, extraData) : console.warn(message);
      break;
    case LogTypes.Info:
      extraData ? console.log(message, extraData) : console.log(message);
      break;
    default:
      console.log(message);
      break;
  }
};
