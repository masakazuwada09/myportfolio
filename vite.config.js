<<<<<<< HEAD
import { resolve } from 'path'
import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

export default defineConfig({
    plugins: [preact()],
    css: {
        devSourcemap: true
    },
    build: {
        outDir: resolve(__dirname, 'dist'),
        emptyOutDir: false,
        sourcemap: 'hidden',
        manifest: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/assets/scripts/main.js'),
                sharer: resolve(
                    __dirname,
                    'src/assets/scripts/sharer/index.jsx'
                )
            },
            output: {
                assetFileNames: 'assets/styles/[name].[hash].css',
                chunkFileNames: 'assets/scripts/[name].[hash].js',
                entryFileNames: 'assets/scripts/[name].[hash].js'
            }
        }
    },
    resolve: {
        alias: {
            '@assets': resolve(__dirname, 'src/assets')
        }
    }
})
=======
import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from '@remix-run/dev';
import { defineConfig } from 'vite';
import jsconfigPaths from 'vite-jsconfig-paths';
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import rehypeImgSize from 'rehype-img-size';
import rehypeSlug from 'rehype-slug';
import rehypePrism from '@mapbox/rehype-prism';

const isDev = process.env.NODE_ENV === 'development';

export default defineConfig({
  assetsInclude: ['**/*.glb', '**/*.hdr', '**/*.glsl'],
  build: {
    assetsInlineLimit: 1024,
  },
  server: {
    port: 7777,
  },
  plugins: [
    mdx({
      rehypePlugins: [[rehypeImgSize, { dir: 'public' }], rehypeSlug, rehypePrism],
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      providerImportSource: '@mdx-js/react',
    }),
    isDev && remixCloudflareDevProxy(), // ✅ Only in dev mode
    remix({
      routes(defineRoutes) {
        return defineRoutes(route => {
          route('/', 'routes/home/route.js', { index: true });
        });
      },
    }),
    jsconfigPaths(),
  ].filter(Boolean), // ✅ Clean out any falsey plugins (like `false`)
});
>>>>>>> 31975cbbed29c5c6daec27d53e32e68f24e030c1
