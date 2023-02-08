export const message = {
  cn: {
    message: {
      hello: "世界",
      unrealized: "未实现（-0-）",
      iotone: "",
      work: 'work',
      myname: '王俊杰',
      englishName: 'ElupMent',
      jobtitle: '前端工程师',
      university: '浙江传媒学院',
      profession: '数字媒体技术',
      graduate: '本科 / 2021年6月毕业',
      gender: '男',
      school: 'Internships'
    },
  },
  en: {
    message: {
      hello: "hello world",
      unrealized: "unrealized（-0-）",
      iotone:
        "It covers all Ant offline payment devices, Alipay boxes in small and medium-sized merchants, self-ordering machines in large shopping malls, face-sweeping payment devices, and so on.",
      iottwo:
        "The entry point of the payment devices is to solve the payment problem, besides the payment scenario, there are also a lot of things related to the content operation",
      desc: "Brief description",
      iotjob1: "Dynamic business scenarios on everyday IoT devices",
      iotjob2: "UIPaaS for IoT marketing",
      work: 'work',
      myname: 'Bilin Ni',
      englishName: 'Iris',
      jobtitle: 'Senior Front End Engineer',
      university: 'Minnan Normal University',
      profession: 'Software Engineering Major',
      graduate: "Bachelor's Degree / Graduated June 2017",
      gender: 'female',
      school: 'Internships'
    },
  },
};
export function getLanguage() {
  const paths = location.href.split("/");
  const lastItem = paths.pop();
  const language = lastItem ? lastItem : "cn";
  return language;
}
