import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Celebration } from '../types/types';

interface AddCelebrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (celebration: Omit<Celebration, 'id'>) => void;
}

const AddCelebrationModal: React.FC<AddCelebrationModalProps> = ({ isOpen, onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    name: '',
    photoUrl: '',
    message: '',
    date: '',
    celebrationType: 'birthday' as Celebration['celebrationType']
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(formData);
    onClose();
    setFormData({
      name: '',
      photoUrl: '',
      message: '',
      date: '',
      celebrationType: 'birthday'
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-xl bg-slate-800 p-6 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-100">Add New Celebration</h2>
          <button
            onClick={onClose}
            className="rounded-full p-1 text-slate-400 hover:bg-slate-700 hover:text-slate-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm text-slate-300">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full rounded-lg bg-slate-700 px-3 py-2 text-slate-100 outline-none ring-indigo-500 focus:ring-2"
              required
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-slate-300">Photo URL</label>
            <input
              type="url"
              value={formData.photoUrl}
              onChange={(e) => setFormData({ ...formData, photoUrl: e.target.value })}
              className="w-full rounded-lg bg-slate-700 px-3 py-2 text-slate-100 outline-none ring-indigo-500 focus:ring-2"
              required
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-slate-300">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full rounded-lg bg-slate-700 px-3 py-2 text-slate-100 outline-none ring-indigo-500 focus:ring-2"
              required
              rows={3}
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-slate-300">Date</label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full rounded-lg bg-slate-700 px-3 py-2 text-slate-100 outline-none ring-indigo-500 focus:ring-2"
              required
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-slate-300">Celebration Type</label>
            <select
              value={formData.celebrationType}
              onChange={(e) => setFormData({ ...formData, celebrationType: e.target.value as Celebration['celebrationType'] })}
              className="w-full rounded-lg bg-slate-700 px-3 py-2 text-slate-100 outline-none ring-indigo-500 focus:ring-2"
              required
            >
              <option value="birthday">Birthday</option>
              <option value="promotion">Promotion</option>
              <option value="anniversary">Anniversary</option>
              <option value="achievement">Achievement</option>
            </select>
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white transition-colors hover:bg-indigo-500"
          >
            Add Celebration
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCelebrationModal;