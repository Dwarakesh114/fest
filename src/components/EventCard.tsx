import React from 'react';
import { motion } from 'framer-motion';
import { Award, MapPin, Users, BookOpen } from 'lucide-react';
import type { EventDetails } from '../types/shedule';

interface EventCardProps {
  event: EventDetails;
  index: number;
}

const EventCard: React.FC<EventCardProps> = React.memo(({ event, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="mb-6 p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10"
    >
      <h4 className="text-xl font-semibold mb-3 flex items-center text-purple-400">
        <Award className="w-5 h-5 mr-2" />
        {event.name}
      </h4>
      {event.venue && (
        <div className="flex items-center text-sm text-gray-400 mb-2">
          <MapPin className="w-4 h-4 mr-2" />
          <span>Venue: {event.venue}</span>
        </div>
      )}
      {event.coordinator && (
        <div className="flex items-center text-sm text-gray-400 mb-3">
          <Users className="w-4 h-4 mr-2" />
          <span>Coordinator: {event.coordinator.name} ({event.coordinator.phone})</span>
        </div>
      )}
      {event.rules && (
        <div className="text-sm text-gray-400">
          <h5 className="font-semibold mb-2 flex items-center text-purple-400">
            <BookOpen className="w-4 h-4 mr-2" />
            Rules:
          </h5>
          <ul className="list-disc list-inside pl-4">
            {event.rules.map((rule, i) => (
              <li key={i} className="mb-1">{rule}</li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
});

EventCard.displayName = 'EventCard';

export default EventCard;