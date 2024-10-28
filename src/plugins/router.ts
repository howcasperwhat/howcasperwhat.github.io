import type { RouteRecordRaw } from "vue-router"

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: "/",
    component: () => import("../pages/index.vue"),
  },
  {
    path: "/notes/",
    component: () => import("../pages/notes/index.vue"),
    redirect: "/notes/develop/",
    children: [{
      path: "develop",
      component: () => import("../pages/notes/develop/index.vue"),
    }, {
      path: "research",
      component: () => import("../pages/notes/research/index.vue"),
    }, {
      path: "algorithm",
      component: () => import("../pages/notes/algorithm/index.vue"),
    }]
  },
  {
    path: "/notes/develop/FlexInCSS",
    component: () => import("../pages/notes/develop/FlexInCSS.md"),
  },
  {
    path: "/notes/develop/NumberInJs",
    component: () => import("../pages/notes/develop/NumberInJs.md"),
  },
  {
    path: "/notes/develop/Network",
    component: () => import("../pages/notes/develop/Network.md"),
  },
  {
    path: "/notes/develop/More-Animatable-Notation",
    component: () => import("../pages/notes/develop/MoreAnimatableNotation.md"),
  },
  {
    path: "/notes/research/BackPropagation",
    component: () => import("../pages/notes/research/BackPropagation.md"),
  },
  {
    path: "/notes/algorithm/LargestRectangleArea",
    component: () => import("../pages/notes/algorithm/LargestRectangleArea.md"),
  },
  {
    path: "/notes/algorithm/MaximalRectangle",
    component: () => import("../pages/notes/algorithm/MaximalRectangle.md"),
  },
  {
    path: "/notes/algorithm/DistinctSubsequences",
    component: () => import("../pages/notes/algorithm/DistinctSubsequences.md"),
  },
  {
    path: "/notes/algorithm/BasicAlgorithm",
    component: () => import("../pages/notes/algorithm/BasicAlgorithm.md"),
  },
  {
    path: "/notes/algorithm/CountSubMatrix",
    component: () => import("../pages/notes/algorithm/CountSubMatrix.md"),
  },
  {
    path: "/notes/algorithm/BinarySearch",
    component: () => import("../pages/notes/algorithm/BinarySearch.md"),
  },
  {
    path: "/demos/",
    component: () => import("../pages/demos/index.vue"),
  },
  {
    path: "/demos/BackPropagation",
    component: () => import("../pages/demos/BackPropagation.vue"),
  },
  {
    path: "/demos/MineSweeper",
    component: () => import("../pages/demos/MineSweeper.vue"),
  },
  {
    path: "/demos/Spark-Chat",
    component: () => import("../pages/demos/Spark-Chat.vue"),
  },
  {
    path: "/demos/LeetCode/:id",
    component: () => import("../pages/demos/LeetCode.vue"),
  },
  {
    path: "/demos/Markdown",
    component: () => import("../pages/demos/Markdown.vue"),
  },
  {
    path: "/study/",
    component: () => import("../pages/study/index.vue"),
    redirect: "/study/linear-algebra/",
    children: [{
      path: "linear-algebra",
      component: () => import("../pages/study/linear-algebra/index.vue"),
    }, {
      path: "machine-learning",
      component: () => import("../pages/study/machine-learning/index.vue"),
    }, {
      path: "canvas-design",
      component: () => import("../pages/study/canvas-design/index.vue"),
    }]
  },
  {
    path: "/study/linear-algebra/linear-equation",
    component: () => import("../pages/study/linear-algebra/linear-equation.md"),
  },
  {
    path: "/study/linear-algebra/matrix-elimination",
    component: () => import("../pages/study/linear-algebra/matrix-elimination.md"),
  },
  {
    path: "/study/linear-algebra/multiplication-and-inversion",
    component: () => import("../pages/study/linear-algebra/multiplication-and-inversion.md"),
  },
  {
    path: "/study/linear-algebra/A=LU",
    component: () => import("../pages/study/linear-algebra/A=LU.md"),
  },
  {
    path: "/study/linear-algebra/vector-space",
    component: () => import("../pages/study/linear-algebra/vector-space.md"),
  },
  {
    path: "/study/linear-algebra/homogeneous-equation",
    component: () => import("../pages/study/linear-algebra/homogeneous-equation.md"),
  },
  {
    path: "/study/machine-learning/data-preprocessing",
    component: () => import("../pages/study/machine-learning/data-preprocessing.md"),
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("../pages/404.vue"),
  },
]

export { routes }