import { Link } from "react-router-dom";

interface Course {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

const courses: Course[] = [
  {
    id: "data-analysis",
    name: "数据分析技术",
    description: "学习数据分析的基本方法和工具，包括数据清洗、数据可视化和统计分析等。",
    icon: "📊",
    color: "from-purple-600 to-pink-600"
  },
  {
    id: "ecommerce-data",
    name: "电子商务数据",
    description: "学习电子商务平台的数据分析方法，包括用户行为分析、销售数据分析等。",
    icon: "💻",
    color: "from-blue-600 to-cyan-400"
  },
  {
    id: "financial-analysis",
    name: "企业财务数据分析",
    description: "学习企业财务数据的分析方法，包括财务报表分析、财务指标分析等。",
    icon: "💰",
    color: "from-green-500 to-emerald-300"
  },
  {
    id: "statistics",
    name: "应用统计实务",
    description: "学习统计分析的基本方法和应用，包括描述性统计、推断性统计等。",
    icon: "📈",
    color: "from-yellow-500 to-orange-400"
  },
  {
    id: "supply-chain",
    name: "供应链数据分析",
    description: "学习如何应用数据分析技术优化供应链管理，提升供应链效率和决策质量。",
    icon: "📦",
    color: "from-red-600 to-pink-500"
  },
  {
    id: "database",
    name: "数据库技术与应用",
    description: "学习数据库的基本原理和SQL语言，以及数据库设计和管理。",
    icon: "💾",
    color: "from-indigo-600 to-blue-400"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* 导航栏 */}
      <nav className="bg-gray-800 border-b border-purple-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                邓菲的个人学习页面
              </span>
            </div>
            <div className="flex items-center">
              <div className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200">
                大二下学期
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* 个人信息区 */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800 border border-purple-900 overflow-hidden shadow-lg rounded-lg">
          <div className="px-4 py-5 sm:px-6 bg-gradient-to-r from-purple-900 to-pink-900">
            <h1 className="text-2xl font-bold text-white">个人信息</h1>
          </div>
          <div className="border-t border-gray-700">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex flex-col md:flex-row items-center">
                <div className="mb-4 md:mb-0 md:mr-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                    <span className="text-4xl">👩‍💻</span>
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                    邓菲
                  </h2>
                  <p className="mt-1 text-lg text-gray-300">广东科学技术职业学院</p>
                  <p className="mt-1 text-lg text-gray-300">商学院 | 商务数据分析与应用专业</p>
                  <p className="mt-4 text-gray-400">
                    我是一名商务数据分析与应用专业的学生，热爱数据分析和编程，
                    希望通过这个页面记录和展示我的学习过程和成果。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 课程列表 */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            我的课程
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <Link 
                key={course.id} 
                to={`/courses/${course.id}`}
                className="group relative bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${course.color}`}></div>
                <div className="px-6 py-8">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-full bg-gradient-to-br ${course.color} text-white mr-4`}>
                      <span className="text-2xl">{course.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-200">
                      {course.name}
                    </h3>
                  </div>
                  <p className="text-gray-400 mb-6">{course.description}</p>
                  <div className="flex items-center text-purple-400 font-medium group-hover:text-pink-400 transition-colors duration-200">
                    <span>查看详情</span>
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 页脚 */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-500 text-sm">
            <p>© 2026 邓菲的个人学习页面 | 广东科学技术职业学院</p>
            <p className="mt-2">商务数据分析与应用专业</p>
          </div>
        </div>
      </footer>
    </div>
  );
}