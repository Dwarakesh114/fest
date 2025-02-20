import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Crown, Music, Heart, Camera, ChevronRight } from 'lucide-react';
// import type { ScheduleData } from './types/shedule'; 
import DepartmentModal from '../components/DepartmentModal';
import scheduleData from '../data/schedule';

function TechnicalEvents() {
  const [selectedDept, setSelectedDept] = useState<string | null>(null);

  const handleCloseDepartment = useCallback(() => {
    setSelectedDept(null);
  }, []);

  const selectedDepartment = selectedDept ? scheduleData.departments[selectedDept] : null;

  return (
    <section className="relative py-20 overflow-hidden" id="schedule">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-blue-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.7),rgba(0,0,0,1))]" />
        
        {/* Animated circles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute rounded-full mix-blend-screen filter blur-xl"
            style={{
              background: `radial-gradient(circle, ${i === 0 ? 'rgba(147,51,234,0.3)' : i === 1 ? 'rgba(59,130,246,0.3)' : 'rgba(236,72,153,0.3)'} 0%, transparent 70%)`,
              width: `${Math.random() * 400 + 200}px`,
              height: `${Math.random() * 400 + 200}px`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* Decorative icons */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 -top-10 -translate-x-1/2 w-20 h-20 opacity-20"
          >
            <Crown className="absolute top-0 left-0 w-6 h-6 text-purple-400" />
            <Music className="absolute top-0 right-0 w-6 h-6 text-blue-400" />
            <Heart className="absolute bottom-0 left-0 w-6 h-6 text-pink-400" />
            <Camera className="absolute bottom-0 right-0 w-6 h-6 text-purple-400" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold relative">
            <span className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 opacity-50 blur-xl animate-pulse" />
            <motion.span 
              className="relative inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-transparent bg-clip-text">
                Department Events
              </span>
            </motion.span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(scheduleData.departments).map(([deptName, deptData], index) => (
            <motion.div
              key={deptName}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur-xl group-hover:opacity-100 transition-opacity opacity-0" />
              <button
                onClick={() => setSelectedDept(deptName)}
                className="relative w-full text-left overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 transition-colors"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                      {deptName}
                    </h3>
                    <ChevronRight className="w-5 h-5 text-purple-400" />
                  </div>
                  <p className="text-gray-400 mb-2">
                    {deptData.events.length} Events
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{deptData.faculty_coordinators ? deptData.faculty_coordinators.length : 1} Coordinator(s)</span>
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedDepartment && (
            <DepartmentModal
              department={selectedDepartment}
              onClose={handleCloseDepartment}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default TechnicalEvents;