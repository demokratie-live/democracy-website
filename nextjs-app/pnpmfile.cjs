// pnpm policy hooks to reduce supply-chain risk.
const DISALLOWED_PROTOCOLS = [/^git\+/i, /^git:/i, /^ssh:/i, /^github:/i, /^gist:/i, /^bitbucket:/i, /^http:\/\//i];
const ALLOWED_PREFIXES = ["workspace:"];

/**
 * Block dependencies that resolve from git/http or other non-registry sources.
 */
function assertSafeSpecs(deps, section, pkgName) {
  if (!deps) return;
  for (const [name, spec] of Object.entries(deps)) {
    const allowedPrefix = ALLOWED_PREFIXES.some((prefix) => spec.startsWith(prefix));
    const disallowed = DISALLOWED_PROTOCOLS.some((rx) => rx.test(spec));
    if (!allowedPrefix && disallowed) {
      throw new Error(
        `Blocked ${section} dependency ${name}@${spec} in ${pkgName}: only registry-hosted packages over HTTPS are allowed.`
      );
    }
  }
}

module.exports = {
  hooks: {
    readPackage(pkg) {
      assertSafeSpecs(pkg.dependencies, "dependencies", pkg.name);
      assertSafeSpecs(pkg.devDependencies, "devDependencies", pkg.name);
      assertSafeSpecs(pkg.optionalDependencies, "optionalDependencies", pkg.name);
      return pkg;
    }
  }
};
