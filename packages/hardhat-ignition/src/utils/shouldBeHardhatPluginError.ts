import type { IgnitionError } from "@nomicfoundation/ignition-core";

/**
 * This is a whitelist of error codes that should be rethrown as NomicLabsHardhatPluginError.
 *
 * The rules for adding an error code to this list are:
 *    - If an exception is used to tell the user that they did something wrong, it should be added.
 *    - If an exception is used to indicate some failure and terminate the current process/deployment, that shouldn't be added.
 *    - If there's an exception that doesn't fit in either category, let's discuss it and review the categories.
 */
const whitelist = [
  200, 201, 202, 203, 204, 403, 404, 405, 406, 407, 408, 409, 411, 600, 601,
  602, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713,
  714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 800, 900,
  1000, 1001, 1002, 1101, 1102, 1103, 1300, 1301, 1302, 1303, 1304, 1305,
];

export function shouldBeHardhatPluginError(error: IgnitionError): boolean {
  return whitelist.includes(error.errorNumber);
}
