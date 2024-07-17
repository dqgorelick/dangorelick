const categories = {
  project: 'Project',
  performance: 'Performance',
  installation: 'Installation',
  wip: 'WIP',
}

const collaborators = {
  nesso: {
    name: 'Francesco Corvi'
  },
  chow: {
    name: 'CHOW'
  },
}

const locations = {
  nyc: 'New York',
  sf: 'San Francisco',
  berlin: 'Berlin',
}

export const Projects = [
 {
  name: 'Transducer Cello',
  id: 'transducer-cello',
  description: 'Creating ... TODO',
  category: [categories.performance, categories.wip],
  startDate: '2024-10-01',
  endDate: '',
  collaborators:  [collaborators.nesso],
  locations: [locations.berlin],
  media: {
    images: [],
    video: [],
    featured: '',
  }
 },
 {
  name: 'ATC Soundscape',
  id: 'atc-soundscape',
  description: 'Creating ... TODO',
  category: [categories.installation, categories.project],
  startDate: '2016-10-01',
  endDate: '2020-01-16',
  collaborators:  [],
  locations: [locations.nyc],
  media: {
    images: [],
    video: [],
    featured: '',
  }
 },
 {
  name: 'Molasses',
  id: 'molasses',
  description: 'Creating ... TODO',
  category: [categories.installation, categories.project],
  startDate: '2023-06-21',
  endDate: '',
  collaborators:  [collaborators.chow],
  locations: [locations.nyc, locations.berlin, locations.sf],
  media: {
    images: [],
    video: [],
    featured: '',
  }
 },
]

/* 
              - featured
              - performance
              - installation
              - projects
              - curatorial
*/