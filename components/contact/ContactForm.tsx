'use client'

import { useState } from 'react'
import NotchCard from '@/components/notch-card/NotchCard'
import { contactContent } from '@/data/pages/contact'
import styles from './ContactForm.module.css'

interface FormState {
  name: string
  email: string
  company: string
  website: string
  problem: string
}

interface FormErrors {
  name?: string
  email?: string
  company?: string
  problem?: string
}

export default function ContactForm() {
  const [step, setStep] = useState<number>(1)
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    website: '',
    problem: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})

  const { form } = contactContent

  const getStepLabel = (): string => {
    if (step === 1) return 'Step 1 of 4'
    if (step === 2) return 'Step 2 of 4'
    if (step === 3) return 'Step 3 of 4'
    if (step === 4) return 'Step 4 of 4'
    return 'Received'
  }

  const validateStep = (currentStep: number): boolean => {
    const newErrors: FormErrors = {}
    if (currentStep === 1) {
      if (!formData.name.trim()) {
        newErrors.name = 'Please provide your name.'
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please provide a valid email address.'
      }
    }
    if (currentStep === 2) {
      if (!formData.company.trim()) {
        newErrors.company = 'Please share your company or brand name.'
      }
    }
    if (currentStep === 3) {
      if (!formData.problem.trim() || formData.problem.trim().length < 10) {
        newErrors.problem = 'Please provide a short description (at least 10 characters).'
      }
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => prev + 1)
    }
  }

  const handleBack = () => {
    setErrors({})
    setStep((prev) => Math.max(prev - 1, 1))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(5)
  }

  const handleEdit = (targetStep: number) => {
    setErrors({})
    setStep(targetStep)
  }

  return (
    <div className={styles.container}>
      <NotchCard corner="bottom-left" label={getStepLabel()} size="large">
        {step === 1 && (
          <div className={styles.stepWrapper}>
            <div className={styles.stepHeader}>
              <h2 className={styles.stepTitle}>{form.step1.title}</h2>
            </div>
            <div className={styles.fieldGroup}>
              <div className={styles.field}>
                <label htmlFor="contact-name" className={styles.label}>
                  {form.step1.nameLabel}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={form.step1.namePlaceholder}
                  className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                />
                {errors.name && <span className={styles.errorText}>{errors.name}</span>}
              </div>
              <div className={styles.field}>
                <label htmlFor="contact-email" className={styles.label}>
                  {form.step1.emailLabel}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={form.step1.emailPlaceholder}
                  className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                />
                {errors.email && <span className={styles.errorText}>{errors.email}</span>}
              </div>
            </div>
            <div className={styles.actions}>
              <button type="button" onClick={handleNext} className={styles.submitBtn}>
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className={styles.stepWrapper}>
            <div className={styles.stepHeader}>
              <h2 className={styles.stepTitle}>{form.step2.title}</h2>
            </div>
            <div className={styles.fieldGroup}>
              <div className={styles.field}>
                <label htmlFor="contact-company" className={styles.label}>
                  {form.step2.companyLabel}
                </label>
                <input
                  id="contact-company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder={form.step2.companyPlaceholder}
                  className={`${styles.input} ${errors.company ? styles.inputError : ''}`}
                />
                {errors.company && <span className={styles.errorText}>{errors.company}</span>}
              </div>
              <div className={styles.field}>
                <label htmlFor="contact-website" className={styles.label}>
                  {form.step2.roleLabel}
                </label>
                <input
                  id="contact-website"
                  type="text"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  placeholder={form.step2.rolePlaceholder}
                  className={styles.input}
                />
              </div>
            </div>
            <div className={styles.actions}>
              <button type="button" onClick={handleNext} className={styles.submitBtn}>
                Continue
              </button>
              <button type="button" onClick={handleBack} className={styles.backBtn}>
                Back
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className={styles.stepWrapper}>
            <div className={styles.stepHeader}>
              <h2 className={styles.stepTitle}>{form.step3.title}</h2>
            </div>
            <div className={styles.fieldGroup}>
              <div className={styles.field}>
                <label htmlFor="contact-problem" className={styles.label}>
                  {form.step3.problemLabel}
                </label>
                <textarea
                  id="contact-problem"
                  value={formData.problem}
                  onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                  placeholder={form.step3.problemPlaceholder}
                  className={`${styles.input} ${styles.textarea} ${errors.problem ? styles.inputError : ''}`}
                />
                {errors.problem && <span className={styles.errorText}>{errors.problem}</span>}
              </div>
            </div>
            <div className={styles.actions}>
              <button type="button" onClick={handleNext} className={styles.submitBtn}>
                Continue
              </button>
              <button type="button" onClick={handleBack} className={styles.backBtn}>
                Back
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <form onSubmit={handleSubmit} className={styles.stepWrapper}>
            <div className={styles.stepHeader}>
              <h2 className={styles.stepTitle}>{form.step4.title}</h2>
            </div>
            <div className={styles.reviewList}>
              <div className={styles.reviewItem}>
                <div className={styles.reviewDetails}>
                  <span className={styles.reviewLabel}>Contact</span>
                  <span className={styles.reviewValue}>{formData.name}</span>
                  <span className={styles.reviewSecondary}>{formData.email}</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleEdit(1)}
                  className={styles.editBtn}
                >
                  Edit
                </button>
              </div>

              <div className={styles.reviewItem}>
                <div className={styles.reviewDetails}>
                  <span className={styles.reviewLabel}>Project / Brand</span>
                  <span className={styles.reviewValue}>{formData.company}</span>
                  {formData.website && (
                    <span className={styles.reviewSecondary}>{formData.website}</span>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => handleEdit(2)}
                  className={styles.editBtn}
                >
                  Edit
                </button>
              </div>

              <div className={styles.reviewItem}>
                <div className={styles.reviewDetails}>
                  <span className={styles.reviewLabel}>Problem</span>
                  <span className={styles.reviewValue}>{formData.problem}</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleEdit(3)}
                  className={styles.editBtn}
                >
                  Edit
                </button>
              </div>
            </div>

            <div className={styles.actions}>
              <button type="submit" className={styles.submitBtn}>
                {form.step4.submitButtonLabel}
              </button>
              <button type="button" onClick={handleBack} className={styles.backBtn}>
                Back
              </button>
            </div>
          </form>
        )}

        {step === 5 && (
          <div className={styles.confirmationWrapper}>
            <h2 className={styles.confirmationHeading}>{form.confirmation.heading}</h2>
            <p className={styles.confirmationMessage}>{form.confirmation.message}</p>
            <p className={styles.confirmationSubline}>{form.confirmation.subline}</p>
          </div>
        )}
      </NotchCard>
    </div>
  )
}
