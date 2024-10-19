import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";
import copy from "rollup-plugin-copy";

/**
 * @param {import('rollup').RollupOptions} config
 * @returns {import('rollup').RollupOptions}
 */
const bundle = (config) => ({
  ...config,
  input: "src/index.ts",
  external: (id) => !/^[./]/.test(id),
});

export default [
  bundle({
    plugins: [
      esbuild(),
      copy({
        targets: [{ src: "public/**", dest: "dist" }],
      }),
    ],
    output: [
      {
        dir: "dist/cjs",
        format: "cjs",
        exports: "named",
        preserveModules: true,
      },
      {
        dir: "dist/es",
        format: "es",
        exports: "named",
        preserveModules: true,
      },
    ],
  }),
  bundle({
    plugins: [dts()],
    output: {
      dir: "dist/es",
      format: "es",
      exports: "named",
      preserveModules: true,
    },
  }),
];
