// KubeJS freezes the global map in server scripts, but allows nested JS state.
// Shared functions are refreshed by server scripts on each data reload.
global.rrServerHooks = {};
