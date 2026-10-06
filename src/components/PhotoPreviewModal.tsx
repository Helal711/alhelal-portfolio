import React, { useState, useRef } from 'react';
import { X, Upload, Image as ImageIcon, CheckCircle, RotateCcw, AlertCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config';

interface PhotoPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPhotoSelected: (dataUrl: string | null) => void;
  currentCustomPhoto: string | null;
}

export const PhotoPreviewModal: React.FC<PhotoPreviewModalProps> = ({
  isOpen,
  onClose,
  onPhotoSelected,
  currentCustomPhoto
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [previewSrc, setPreviewSrc] = useState<string | null>(currentCustomPhoto);
  const [fileName, setFileName] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please select a valid image file (JPG, PNG, WEBP).');
      return;
    }

    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setPreviewSrc(result);
    };
    reader.readAsDataURL(file);
  };

  const handleApply = () => {
    onPhotoSelected(previewSrc);
    onClose();
  };

  const handleReset = () => {
    setPreviewSrc(null);
    setFileName('');
    onPhotoSelected(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close Preview Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Local Browser Utility</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Profile Photo Live Preview
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Test how any image file from your computer looks in the executive hero frame. No files are uploaded to any server; uses client-side memory only.
          </p>
        </div>

        {/* File Dropzone */}
        <div
          onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
          onDragLeave={() => setDragActive(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragActive(false);
            if (e.dataTransfer.files && e.dataTransfer.files[0]) {
              handleFileChange(e.dataTransfer.files[0]);
            }
          }}
          className={`p-6 border-2 border-dashed rounded-2xl text-center transition-all ${
            dragActive
              ? 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30'
              : 'border-slate-300 dark:border-slate-700 hover:border-slate-400 bg-slate-50 dark:bg-slate-850'
          }`}
        >
          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                handleFileChange(e.target.files[0]);
              }
            }}
          />

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-slate-500 dark:text-slate-300 mb-3">
              <Upload className="w-5 h-5 text-emerald-500" />
            </div>

            <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
              Drag &amp; drop your profile picture here, or{' '}
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="text-emerald-600 dark:text-emerald-400 underline font-bold cursor-pointer"
              >
                browse
              </button>
            </p>
            <span className="text-[11px] text-slate-400 mt-1">
              Supports JPG, JPEG, PNG, WEBP (Temporary browser preview)
            </span>
          </div>
        </div>

        {/* Live Mini Preview */}
        {previewSrc && (
          <div className="mt-5 p-4 rounded-xl bg-slate-100 dark:bg-slate-800/80 flex items-center gap-4">
            <img
              src={previewSrc}
              alt="Selected Preview"
              className="w-14 h-14 object-cover rounded-xl border border-slate-300 dark:border-slate-600 shadow-sm"
            />
            <div className="flex-1 min-w-0">
              <div className="text-xs font-bold text-slate-900 dark:text-white truncate">
                {fileName || 'Local file loaded'}
              </div>
              <div className="text-[11px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1 mt-0.5">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Ready to preview in Hero frame</span>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="p-1.5 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-white dark:hover:bg-slate-700 transition-colors"
              title="Reset to default image"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Permanent Replacement Guidance */}
        <div className="mt-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
          <span>
            <strong>To permanently change your photo:</strong> Save your photo file as <code className="bg-slate-200 dark:bg-slate-750 px-1 py-0.5 rounded font-mono text-slate-800 dark:text-slate-200">assets/profile.jpg</code> in the repository.
          </span>
        </div>

        {/* Actions */}
        <div className="mt-6 flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleApply}
            disabled={!previewSrc}
            className="px-5 py-2 text-xs font-semibold text-white bg-slate-900 dark:bg-emerald-600 hover:bg-slate-800 dark:hover:bg-emerald-500 rounded-lg transition-colors shadow-sm disabled:opacity-50 disabled:pointer-events-none"
          >
            Apply Live Preview
          </button>
        </div>

      </div>
    </div>
  );
};
