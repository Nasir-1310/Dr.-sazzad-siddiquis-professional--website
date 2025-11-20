import { GraduationCap, PenTool, Users, Newspaper, FileText, Award } from 'lucide-react';
import Image from 'next/image';
import Button, { ArrowRightIcon, ExternalLinkIcon } from '@/components/ui/Button';

export default function MyRolesSection() {
  const coreRoles = [
    {
      id: 'educator',
      title: 'Educator & Mentor',
      description: 'Guiding the next generation through innovative pedagogy and transformative mentorship.',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=1600&fit=crop',
      alt: 'Classroom lecture with engaged students',
      icon: GraduationCap,
      link: '/teaching',
      linkText: 'Explore My Teaching',
      colSpan: 'md:col-span-1'
    },
    {
      id: 'author',
      title: 'Acclaimed Author',
      description: 'Exploring identity and justice through award-winning fiction and non-fiction.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=1600&fit=crop',
      alt: 'Open book with fountain pen',
      icon: PenTool,
      link: '/publications',
      linkText: 'View Publications',
      colSpan: 'md:col-span-1'
    },
    {
      id: 'public-servant',
      title: 'Public Servant',
      description: 'Championing equitable, evidence-based policy at all levels of governance.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=1600&fit=crop',
      alt: 'Professional policy documents and governance',
      icon: Users,
      link: '/platform',
      linkText: 'Learn My Platform',
      colSpan: 'md:col-span-2 lg:col-span-1'
    }
  ];

  const achievements = [
    {
      id: 'articles',
      title: 'Featured Articles',
      description: 'The Atlantic • Foreign Affairs • Harvard Kennedy Review',
      icon: Newspaper,
      link: '/articles',
      linkText: 'Read Articles',
      bgImage: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200&h=800&fit=crop',
      gradientFrom: 'from-slate-900/80',
      gradientTo: 'to-slate-700/90',
      iconBg: 'bg-white/20',
      textColor: 'text-white',
      colSpan: 'sm:col-span-1'
    },
    {
      id: 'publications',
      title: 'Publications',
      description: '45+ papers • 33+ citations',
      icon: FileText,
      link: '/publications',
      linkText: 'View Bibliography',
      bgImage: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&h=800&fit=crop',
      gradientFrom: 'from-indigo-900/80',
      gradientTo: 'to-purple-800/90',
      iconBg: 'bg-white/20',
      textColor: 'text-white',
      colSpan: 'sm:col-span-1'
    },
    {
      id: 'awards',
      title: 'Awards & Recognition',
      description: 'National Book Award Finalist • Rhodes Scholar • UNESCO Prize',
      icon: Award,
      link: '/awards',
      linkText: 'See All Honors',
      bgImage: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200&h=800&fit=crop',
      gradientFrom: 'from-amber-700/80',
      gradientTo: 'to-yellow-600/90',
      iconBg: 'bg-white/20',
      textColor: 'text-white',
      colSpan: 'sm:col-span-2 md:col-span-1'
    }
  ];

  return (
    <section className="py-12 px-4 sm:py-16 md:py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight px-4">
            My Professional Journey
          </h2>
          <p className="mt-4 sm:mt-5 md:mt-6 text-base sm:text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light px-4">
            A lifelong dedication to advancing education, literature, evidence-based policy, and public service.
          </p>
        </div>

        {/* Core Roles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20 px-4">
          {coreRoles.map((role) => {
            const IconComponent = role.icon;
            return (
              <div 
                key={role.id}
                className={`group relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 ${role.colSpan}`}
              >
                <div className="relative w-full h-80 sm:h-96">
                  <Image
                    src={role.image}
                    alt={role.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10 text-white text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-md rounded-full mb-4 sm:mb-6">
                    <IconComponent className="w-9 h-9 sm:w-11 sm:h-11" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">{role.title}</h3>
                  <p className="text-white/90 mb-6 sm:mb-8 max-w-xs mx-auto text-sm sm:text-base">
                    {role.description}
                  </p>
                  <Button 
                    href={role.link} 
                    variant="gradient" 
                    size="md" 
                    icon={<ArrowRightIcon />} 
                    iconPosition="right"
                  >
                    {role.linkText}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Publications, Articles & Recognition */}
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 md:p-12 lg:p-20 mx-4">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
              Publications, Articles & Recognition
            </h3>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
              Advancing knowledge through rigorous scholarship and impactful public discourse
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {achievements.map((achievement) => {
              const IconComponent = achievement.icon;
              return (
                <div 
                  key={achievement.id}
                  className={`relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 ${achievement.colSpan}`}
                >
                  {/* Background Image */}
                  <div className="relative w-full h-full min-h-[320px] sm:min-h-[360px]">
                    <Image
                      src={achievement.bgImage}
                      alt={achievement.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradientFrom} ${achievement.gradientTo} transition-opacity duration-500 group-hover:opacity-95`} />
                  
                                 {/* Content */}
                  <div className={`absolute inset-0 flex flex-col items-center justify-center text-center p-6 sm:p-8 ${achievement.textColor}`}>
                    <div className={`inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full ${achievement.iconBg} backdrop-blur-md mb-5 sm:mb-6 transition-transform duration-500 group-hover:scale-110`}>
                      <IconComponent className="w-10 h-10 sm:w-12 sm:h-12" />
                    </div>
                    
                    <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                      {achievement.title}
                    </h4>
                    
                    <p className="text-sm sm:text-base text-white/90 mb-5 sm:mb-6 leading-relaxed max-w-xs">
                      {achievement.description}
                    </p>
                    
                    <Button 
                      href={achievement.link} 
                      variant="outline" 
                      className="bg-gradient-to-r  text-white  "
                      size="sm" 
                      icon={<ExternalLinkIcon />} 
                      iconPosition="right"
                    >
                      {achievement.linkText}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
