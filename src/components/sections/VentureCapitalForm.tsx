import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { X, Upload, Calendar } from "lucide-react";
import { Input } from "../common/Input";
import { Button } from "../common/Button";
import SectionHeader from "../common/SectionHeader";

interface VentureCapitalCollapsibleFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (formData: FormData) => void;
}

interface FormData {
  projectName: string;
  email: string;
  whyInvest: string;
  hasWorkingApp: string;
  workingFrom: string;
  totalUsers: string;
  activeUsersPerDay: string;
  totalOrders: string;
  totalRevenue: string;
  pitchDeck: File | null;
  screenshots: FileList | null;
}

interface DragState {
  pitchDeck: boolean;
  screenshots: boolean;
}

const VentureCapitalForm: React.FC<VentureCapitalCollapsibleFormProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<FormData>({
    projectName: "",
    email: "",
    whyInvest: "",
    hasWorkingApp: "",
    workingFrom: "",
    totalUsers: "",
    activeUsersPerDay: "",
    totalOrders: "",
    totalRevenue: "",
    pitchDeck: null,
    screenshots: null,
  });

  const [dragActive, setDragActive] = useState<DragState>({
    pitchDeck: false,
    screenshots: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof Pick<FormData, "pitchDeck" | "screenshots">
  ) => {
    const files = e.target.files;
    if (!files) return;

    if (field === "pitchDeck") {
      setFormData((prev) => ({ ...prev, pitchDeck: files[0] }));
    } else if (field === "screenshots") {
      setFormData((prev) => ({ ...prev, screenshots: files }));
    }
  };

  const handleDrag = (
    e: React.DragEvent<HTMLDivElement>,
    field: keyof DragState
  ) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive((prev) => ({ ...prev, [field]: true }));
    } else if (e.type === "dragleave") {
      setDragActive((prev) => ({ ...prev, [field]: false }));
    }
  };

  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>,
    field: keyof Pick<FormData, "pitchDeck" | "screenshots">
  ) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive((prev) => ({ ...prev, [field]: false }));

    const files = e.dataTransfer.files;
    if (!files || files.length === 0) return;

    if (field === "pitchDeck") {
      setFormData((prev) => ({ ...prev, pitchDeck: files[0] }));
    } else if (field === "screenshots") {
      setFormData((prev) => ({ ...prev, screenshots: files }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Call the onSubmit prop if provided
    if (onSubmit) {
      onSubmit(formData);
    } else {
      // Default behavior - log to console
      console.log("Form submitted:", formData);
    }

    // Close the form after submission
    onClose();
  };

  const resetForm = () => {
    setFormData({
      projectName: "",
      email: "",
      whyInvest: "",
      hasWorkingApp: "",
      workingFrom: "",
      totalUsers: "",
      activeUsersPerDay: "",
      totalOrders: "",
      totalRevenue: "",
      pitchDeck: null,
      screenshots: null,
    });
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  // Animation variants
  const collapseVariants: Variants = {
    hidden: {
      height: 0,
      opacity: 0,
      transition: {
        height: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
        opacity: { duration: 0.25 },
      },
    },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        height: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
        opacity: { duration: 0.25, delay: 0.15 },
      },
    },
  };

  const contentVariants: Variants = {
    hidden: {
      y: -20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={collapseVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="overflow-hidden mt-8 sm:mt-12"
        >
          <motion.div
            variants={contentVariants}
            className="max-w-4xl mx-auto  backdrop-blur-xl "
          >
            {/* Form Header */}
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-white/10">
              <div className="flex-1">
                <SectionHeader
                  isInline
                  baseTitle="Apply for a"
                  highlightTitle="opportunity"
                  subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
                />
              </div>
              <button
                onClick={handleClose}
                className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors flex-shrink-0 ml-4"
                aria-label="Close form"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information - Each in its own row */}
              <div className="space-y-6">
                <Input
                  label="Project Name"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleInputChange}
                  placeholder="Enter your project name"
                  fullWidth
                  required
                />
                <Input
                  label="Email to reach you"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  fullWidth
                  required
                />
              </div>

              {/* Why Invest Textarea */}
              <div>
                <label className="block text-sm font-medium text-[#F5F5F5] mb-2">
                  Why to invest at your project
                </label>
                <textarea
                  name="whyInvest"
                  value={formData.whyInvest}
                  onChange={handleInputChange}
                  placeholder="Describe why investors should invest in your project..."
                  className="w-full h-32 px-4 py-3 rounded-xl border border-gray-300 bg-white font-medium transition-all duration-200 ease-in-out placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 resize-none"
                  required
                />
              </div>

              {/* Working App Question */}
              <div>
                <label className="block text-sm font-medium text-[#F5F5F5] mb-3">
                  Already working app
                </label>
                <div className="flex gap-4 sm:gap-6">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="hasWorkingApp"
                      value="yes"
                      checked={formData.hasWorkingApp === "yes"}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <div className="w-4 h-4 rounded-full border-2 border-primary mr-2 flex items-center justify-center">
                      {formData.hasWorkingApp === "yes" && (
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      )}
                    </div>
                    <span className="text-white">Yes</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="hasWorkingApp"
                      value="no"
                      checked={formData.hasWorkingApp === "no"}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <div className="w-4 h-4 rounded-full border-2 border-primary mr-2 flex items-center justify-center">
                      {formData.hasWorkingApp === "no" && (
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      )}
                    </div>
                    <span className="text-white">No</span>
                  </label>
                </div>
              </div>

              {/* Stats Grid - 3 in first row, 2 in second row */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Input
                    label="Working from"
                    name="workingFrom"
                    value={formData.workingFrom}
                    onChange={handleInputChange}
                    placeholder="Select date"
                    leftIcon={Calendar}
                    fullWidth
                  />
                  <Input
                    label="Total Users"
                    name="totalUsers"
                    type="number"
                    value={formData.totalUsers}
                    onChange={handleInputChange}
                    placeholder="0"
                    fullWidth
                  />
                  <Input
                    label="Active users per day"
                    name="activeUsersPerDay"
                    type="number"
                    value={formData.activeUsersPerDay}
                    onChange={handleInputChange}
                    placeholder="0"
                    fullWidth
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Total orders"
                    name="totalOrders"
                    type="number"
                    value={formData.totalOrders}
                    onChange={handleInputChange}
                    placeholder="0"
                    fullWidth
                  />
                  <Input
                    label="Total revenue By SAR"
                    name="totalRevenue"
                    type="number"
                    value={formData.totalRevenue}
                    onChange={handleInputChange}
                    placeholder="0"
                    fullWidth
                  />
                </div>
              </div>

              {/* File Uploads */}
              <div className="space-y-6">
                {/* Pitch Deck Upload */}
                <div>
                  <label className="block text-sm font-medium text-[#F5F5F5] mb-3">
                    Upload your pitch deck
                  </label>
                  <div
                    className={`relative border-2 border-dashed rounded-xl p-6 sm:p-8 text-center transition-colors ${
                      dragActive.pitchDeck
                        ? "border-primary bg-primary/10"
                        : "border-gray-400 hover:border-primary"
                    }`}
                    onDragEnter={(e) => handleDrag(e, "pitchDeck")}
                    onDragLeave={(e) => handleDrag(e, "pitchDeck")}
                    onDragOver={(e) => handleDrag(e, "pitchDeck")}
                    onDrop={(e) => handleDrop(e, "pitchDeck")}
                  >
                    <input
                      type="file"
                      accept=".pdf,.ppt,.pptx"
                      onChange={(e) => handleFileUpload(e, "pitchDeck")}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      aria-label="Upload pitch deck"
                    />
                    <Upload className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="text-white text-sm mb-1">
                      {formData.pitchDeck
                        ? formData.pitchDeck.name
                        : "Upload your pitch deck file pdf Max file size 10Mb"}
                    </p>
                  </div>
                </div>

                {/* Screenshots Upload */}
                <div>
                  <label className="block text-sm font-medium text-[#F5F5F5] mb-3">
                    Upload Screenshots
                  </label>
                  <div
                    className={`relative border-2 border-dashed rounded-xl p-6 sm:p-8 text-center transition-colors ${
                      dragActive.screenshots
                        ? "border-primary bg-primary/10"
                        : "border-gray-400 hover:border-primary"
                    }`}
                    onDragEnter={(e) => handleDrag(e, "screenshots")}
                    onDragLeave={(e) => handleDrag(e, "screenshots")}
                    onDragOver={(e) => handleDrag(e, "screenshots")}
                    onDrop={(e) => handleDrop(e, "screenshots")}
                  >
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={(e) => handleFileUpload(e, "screenshots")}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      aria-label="Upload screenshots"
                    />
                    <Upload className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="text-white text-sm mb-1">
                      {formData.screenshots && formData.screenshots.length > 0
                        ? `${formData.screenshots.length} file(s) selected`
                        : "Upload your screenshots jpeg or png Max file size 2Mb Max 5 screenshots"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto px-8"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  className="w-full sm:w-auto px-8"
                >
                  Apply Now
                </Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VentureCapitalForm;
