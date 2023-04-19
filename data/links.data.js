import CSS from '../components/Icons/CSS.vue'
import Network from '../components/Icons/Network.vue'
import English from '../components/Icons/English.vue'
import Algorithm from '../components/Icons/Algorithm.vue'
import AI from '../components/Icons/AI.vue'
import Database from '../components/Icons/Database.vue'
import Math from '../components/Icons/Math.vue'
import ComputerSystem from '../components/Icons/ComputerSystem.vue'
export const links = [{
  id: 1,
  link: '/CSS/',
  title: 'CSS',
  details: 'My CSS notes.',
  icon: CSS,
  tags: ["Flex", "Selector"],
  color: '#2b8cff'
}, {
  id: 2,
  link: '/Network/',
  title: 'Network',
  details: 'My network notes.',
  icon: Network,
  tags: ["HTTP", "TCP"],
  color: '#aaaaaa'
}, {
  id: 3,
  link: '/English/',
  title: 'English',
  details: 'My English notes.',
  icon: English,
  tags: ["Vocabulary", "Grammar", "Sentence"],
  color: '#b29dca'
}, {
  id: 4,
  link: '/Algorithm/',
  title: 'Algorithm',
  details: 'My Algorithm notes.',
  icon: Algorithm,
  tags: ["Dynamic Programming", "Greedy", "Backtracking", "LeetCode", "AcWing", "LanQiao"],
  color: '#32CD32'
}, {
  id: 5,
  link: '/AI/',
  title: 'AI',
  details: 'My Artificial Intelligence notes.',
  icon: AI,
  tags: ["DNN", "BP", "CNN", "RNN", "GAN", "NLP", "RL"],
  color: '#ff8c00'
}, {
  id: 6,
  link: '/Database/',
  title: 'Database',
  details: 'My Database notes.',
  icon: Database,
  tags: ["MySQL", "NoSQL"],
  color: '#05a0dd'
}, {
  id: 7,
  link: '/Math/',
  title: 'Math',
  details: 'My Math notes.',
  icon: Math,
  tags: ["Probability", "Statistics"],
  color: '#4bcfa4'
}, {
  id: 8,
  link: '/Computer System/',
  title: 'Computer System',
  details: 'My Computer System notes.',
  icon: ComputerSystem,
  tags: ["Computer Architecture", "Computer Organization"],
  color: '#fcc706'
}
]