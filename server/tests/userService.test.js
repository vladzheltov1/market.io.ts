const { userService } = require('../build/services/user.service');

describe('Testing user service functionality', () => {
    test("Password match check", () => {
        expect(userService.passwordsMatch("password", "password")).toBe(true);
        expect(userService.passwordsMatch("pass1", "pass2")).toBe(false);
        expect(userService.passwordsMatch("", "")).toBe(true);
        expect(userService.passwordsMatch(3, 3)).toBe(null);
        expect(userService.passwordsMatch(1, 2)).toBe(null);
    })
    test("Check login in database", () => {
        expect(userService.doesLoginExist("admin")).toBe(true);
        expect(userService.doesLoginExist("login")).toBe(true);
        expect(userService.doesLoginExist("some login")).toBe(false);
        expect(userService.doesLoginExist("")).toBe(false);
        expect(userService.doesLoginExist(10)).toBe(false);
    })
});