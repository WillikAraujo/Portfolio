import frontendImg from "@/assets/imgs/frontend-img.png";
import backtendImg from "@/assets/imgs/backend-img.png";
import dataanalyticsImg from "@/assets/imgs/dataanalytics-img.png";
import html5Icon from "@/assets/imgs/icons/html-icon.png";
import css3Icon from "@/assets/imgs/icons/css-icon.png";
import jsIcon from "@/assets/imgs/icons/js-icon.png";
import vueIcon from "@/assets/imgs/icons/vue-icon.png";
import nodejsIcon from "@/assets/imgs/icons/nodejs-icon.png";
import mongodbIcon from "@/assets/imgs/icons/mongodb-icon.png";
import postgresqlIcon from "@/assets/imgs/icons/postgresql-icon.png";
import worfpressIcon from "@/assets/imgs/icons/wordpress-icon.png";
import excelIcon from "@/assets/imgs/icons/excel-icon.png";
import powerbiIcon from "@/assets/imgs/icons/powerbi-icon.png";
import pythonIcon from "@/assets/imgs/icons/python-icon.png";

export const habilidadesData = [
  {
    id: 1,
    area: "Front-end",
    img: {
      alt: "Imagem de um monitor e uma imagem simulando um desenvolvedor front-end",
      src: frontendImg,
    },
    especificas: [
      {
        nome: "HTML5",
        img: {
          alt: "Ícone HTML5",
          src: html5Icon,
        },
      },
      {
        nome: "CSS3",
        img: {
          alt: "Ícone CSS3",
          src: css3Icon,
        },
      },
      {
        nome: "JavaScript",
        img: {
          alt: "Ícone JavaScript",
          src: jsIcon,
        },
      },
      {
        nome: "VueJs",
        img: {
          alt: "Ícone VueJs",
          src: vueIcon,
        },
      },
    ],
  },
  {
    id: 2,
    area: "Back-end",
    img: {
      alt: "Imagem de um monitor e uma imagem simulando um desenvolvedor back-end",
      src: backtendImg,
    },
    especificas: [
      {
        nome: "NodeJs",
        img: {
          alt: "Ícone NodeJs",
          src: nodejsIcon,
        },
      },
      {
        nome: "MongoDB",
        img: {
          alt: "Ícone MongoDB",
          src: mongodbIcon,
        },
      },
      {
        nome: "PostgreSQL",
        img: {
          alt: "Ícone PostgreSQL",
          src: postgresqlIcon,
        },
      },
      {
        nome: "Wordpress",
        img: {
          alt: "Ícone Wordpress",
          src: worfpressIcon,
        },
      },
    ],
  },
  {
    id: 3,
    area: "Data-Analytics",
    img: {
      alt: "Imagem de um monitor com alguns gráficos e uma lúpa simulando um desenvolvedor e analalista de dados",
      src: dataanalyticsImg,
    },
    especificas: [
      {
        nome: "Excel",
        img: {
          alt: "Ícone Excel",
          src: excelIcon,
        },
      },
      {
        nome: "Power BI",
        img: {
          alt: "Ícone Power BI",
          src: powerbiIcon,
        },
      },
      {
        nome: "Python",
        img: {
          alt: "Ícone Python",
          src: pythonIcon,
        },
      },
    ],
  },
];
