import React from 'react';
import { motion } from 'framer-motion';
import { X, GraduationCap, School, Calendar, Phone, Mail } from 'lucide-react';
import type { Department } from '../types/shedule';
import EventCard from './EventCard';

interface DepartmentModalProps {
  department: Department;
  onClose: () => void;
}

const DepartmentModal: React.FC<DepartmentModalProps> = React.memo(({ department, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto"
      onClick={onClose}
    >
      <div className="min-h-full flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative bg-gradient-to-r from-purple-900/30 via-black/50 to-blue-900/30 rounded-xl p-8 max-w-2xl w-full my-8"
          onClick={e => e.stopPropagation()}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl opacity-50" />
          <div className="relative z-10">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                {department.name}
              </h3>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-purple-400" />
              </button>
            </div>

            <div className="space-y-8">
              {/* Faculty Coordinators */}
              <div>
                <h4 className="text-xl font-semibold mb-4 flex items-center text-purple-400">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Faculty Coordinator(s)
                </h4>
                <div className="space-y-4">
                  {department.faculty_coordinators ? (
                    department.faculty_coordinators.map((coord, index) => (
                      <div key={index} className="p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                        <span className="text-white font-medium">{coord.name}</span>
                        <div className="flex items-center space-x-4 text-sm text-gray-400 mt-2">
                          <span className="flex items-center">
                            <Phone className="w-4 h-4 mr-1" />
                            {coord.phone}
                          </span>
                          {coord.email && (
                            <span className="flex items-center">
                              <Mail className="w-4 h-4 mr-1" />
                              {coord.email}
                            </span>
                          )}
                        </div>
                      </div>
                    ))
                  ) : department.faculty_coordinator && (
                    <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                      <span className="text-white font-medium">
                        {department.faculty_coordinator.name}
                      </span>
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mt-2">
                        <span className="flex items-center">
                          <Phone className="w-4 h-4 mr-1" />
                          {department.faculty_coordinator.phone}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Student Coordinator */}
              <div>
                <h4 className="text-xl font-semibold mb-4 flex items-center text-purple-400">
                  <School className="w-5 h-5 mr-2" />
                  Student Coordinator
                </h4>
                <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                  <span className="text-white font-medium">
                    {department.student_coordinator.name}
                  </span>
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mt-2">
                    <span className="flex items-center">
                      <Phone className="w-4 h-4 mr-1" />
                      {department.student_coordinator.phone}
                    </span>
                    {department.student_coordinator.email && (
                      <span className="flex items-center">
                        <Mail className="w-4 h-4 mr-1" />
                        {department.student_coordinator.email}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Events */}
              <div>
                <h4 className="text-xl font-semibold mb-4 flex items-center text-purple-400">
                  <Calendar className="w-5 h-5 mr-2" />
                  Events
                </h4>
                <div className="space-y-4">
                  {department.events.map((event, index) => (
                    <EventCard key={index} event={event} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
});

DepartmentModal.displayName = 'DepartmentModal';

export default DepartmentModal;