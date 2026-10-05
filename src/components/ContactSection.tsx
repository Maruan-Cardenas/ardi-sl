"use client";
import { COMPANY } from "@/data/company";
import { useTranslation } from "@/components/I18nProvider";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  ExternalLink,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";

interface ContactSectionProps {
  onSuccessNotification: (msg: string) => void;
}

export default function ContactSection({ onSuccessNotification }: ContactSectionProps) {
  const { dictionary } = useTranslation();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: dictionary.components.contact.opt1,
    mensaje: "",
    privacidad: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.nombre.trim()) errs.nombre = dictionary.components.contact.errName;
    if (!formData.email.trim() || !formData.email.includes("@"))
      errs.email = dictionary.components.contact.errEmail;
    if (!formData.telefono.trim())
      errs.telefono = dictionary.components.contact.errPhone;
    if (!formData.mensaje.trim() || formData.mensaje.trim().length < 10)
      errs.mensaje = dictionary.components.contact.errMsg;
    if (!formData.privacidad)
      errs.privacidad = dictionary.components.contact.errPrivacy;
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      onSuccessNotification(
        dictionary.components.contact.msgSuccess
      );
    }, 1000);
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    onSuccessNotification(`¡${label} copiado al portapapeles!`);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  return (
    <section id="contacto" className="py-24 bg-slate-950 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{dictionary.components.contact.directAttention}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {dictionary.components.contact.titleStart}
            <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
              {dictionary.components.contact.titleHighlight}
            </span>
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            Estamos en Oiartzun a su entera disposición. Consúltenos cualquier duda sobre dimensiones,
            capacidades, plazos de entrega o solicite presupuesto sin compromiso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info Cards & Map */}
          <div className="lg:col-span-5 space-y-6">
            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 transition-colors shadow-lg">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center border border-sky-500/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase text-slate-400 tracking-wider">
                      {dictionary.components.contact.phonesTitle}
                    </h4>
                    <div className="mt-1 flex flex-col gap-0.5">
                      <a
                        href={`tel:${COMPANY.contact.phone.replace(/\s+/g, "")}`}
                        className="text-base sm:text-lg font-bold text-white hover:text-sky-400 transition-colors"
                      >
                        {COMPANY.contact.phoneDisplay}
                      </a>
                      <a
                        href={`tel:${COMPANY.contact.phoneMobile.replace(/\s+/g, "")}`}
                        className="text-sm font-semibold text-slate-300 hover:text-sky-400 transition-colors"
                      >
                        {COMPANY.contact.phoneMobileDisplay}
                      </a>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(COMPANY.contact.phone, "Teléfono fijo")}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors text-xs flex items-center gap-1"
                  title="Copiar teléfono"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 transition-colors shadow-lg">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center border border-sky-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase text-slate-400 tracking-wider">
                      {dictionary.components.contact.emailTitle}
                    </h4>
                    <a
                      href={`mailto:${COMPANY.contact.email}`}
                      className="mt-1 block text-base font-bold text-white hover:text-sky-400 transition-colors"
                    >
                      {COMPANY.contact.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(COMPANY.contact.email, "Correo")}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors text-xs flex items-center gap-1"
                  title="Copiar email"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Location & Hours Card */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 transition-colors shadow-lg space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center border border-sky-500/20 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase text-slate-400 tracking-wider">
                    {dictionary.components.contact.hqTitle}
                  </h4>
                  <p className="mt-1 text-sm font-semibold text-white">
                    {COMPANY.location.address}
                  </p>
                  <p className="text-xs text-slate-400">
                    {COMPANY.location.postalCode} {COMPANY.location.city} ({COMPANY.location.province}), {dictionary.components.contact.country}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center border border-sky-500/20 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase text-slate-400 tracking-wider">
                    {dictionary.components.contact.hoursTitle}
                  </h4>
                  <p className="mt-1 text-xs text-slate-300">
                    {COMPANY.contact.schedule}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={COMPANY.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-sky-300 bg-sky-950/40 hover:bg-sky-900/40 border border-sky-800/50 hover:border-sky-600 transition-all text-center"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{dictionary.components.contact.mapsBtn}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl shadow-black/80">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{dictionary.components.contact.successTitle}</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    {dictionary.components.contact.successDesc1}<strong className="text-white">{formData.nombre}</strong>. Hemos recibido su
                    consulta sobre <span className="text-sky-400 font-semibold">{formData.asunto}</span>. En un plazo
                    máximo de 24 horas laborables un técnico comercial le responderá.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          nombre: "",
                          email: "",
                          telefono: "",
                          asunto: dictionary.components.contact.opt1,
                          mensaje: "",
                          privacidad: false,
                        });
                      }}
                      className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
                    >
                      {dictionary.components.contact.successBtn}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <h3 className="text-lg font-bold text-white">
                      {dictionary.components.contact.formTitle}
                    </h3>
                    <span className="text-xs text-slate-400">{dictionary.components.contact.formMandatory}</span>
                  </div>

                  {/* Nombre */}
                  <div>
                    <label
                      htmlFor="form-nombre"
                      className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
                    >
                      {dictionary.components.contact.lblName}
                    </label>
                    <input
                      id="form-nombre"
                      type="text"
                      required
                      placeholder={dictionary.components.contact.phName}
                      value={formData.nombre}
                      onChange={(e) => {
                        setFormData({ ...formData, nombre: e.target.value });
                        if (errors.nombre) setErrors({ ...errors, nombre: "" });
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950 text-white text-sm border focus:outline-none transition-all ${
                        errors.nombre
                          ? "border-rose-500 focus:ring-2 focus:ring-rose-500"
                          : "border-slate-700 focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
                      }`}
                    />
                    {errors.nombre && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.nombre}</span>
                      </p>
                    )}
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="form-email"
                        className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
                      >
                        {dictionary.components.contact.emailTitle} *
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        required
                        placeholder={dictionary.components.contact.phEmail}
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: "" });
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950 text-white text-sm border focus:outline-none transition-all ${
                          errors.email
                            ? "border-rose-500 focus:ring-2 focus:ring-rose-500"
                            : "border-slate-700 focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="form-telefono"
                        className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
                      >
                        {dictionary.components.contact.lblPhone}
                      </label>
                      <input
                        id="form-telefono"
                        type="tel"
                        required
                        placeholder={dictionary.components.contact.phPhone}
                        value={formData.telefono}
                        onChange={(e) => {
                          setFormData({ ...formData, telefono: e.target.value });
                          if (errors.telefono) setErrors({ ...errors, telefono: "" });
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950 text-white text-sm border focus:outline-none transition-all ${
                          errors.telefono
                            ? "border-rose-500 focus:ring-2 focus:ring-rose-500"
                            : "border-slate-700 focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
                        }`}
                      />
                      {errors.telefono && (
                        <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.telefono}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Asunto */}
                  <div>
                    <label
                      htmlFor="form-asunto"
                      className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
                    >
                      {dictionary.components.contact.lblSubject}
                    </label>
                    <select
                      id="form-asunto"
                      value={formData.asunto}
                      onChange={(e) => setFormData({ ...formData, asunto: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                    >
                      <option value={dictionary.components.contact.opt1}>{dictionary.components.contact.opt1}</option>
                      <option value={dictionary.components.contact.opt2}>{dictionary.components.contact.opt2}</option>
                      <option value={dictionary.components.contact.opt3}>{dictionary.components.contact.opt3}</option>
                      <option value={dictionary.components.contact.opt4}>{dictionary.components.contact.opt4}</option>
                      <option value={dictionary.components.contact.opt5}>{dictionary.components.contact.opt5}</option>
                      <option value={dictionary.components.contact.opt6}>{dictionary.components.contact.opt6}</option>
                      <option value={dictionary.components.contact.opt7}>{dictionary.components.contact.opt7}</option>
                      <option value={dictionary.components.contact.opt8}>{dictionary.components.contact.opt8}</option>
                      <option value={dictionary.components.contact.opt9}>{dictionary.components.contact.opt9}</option>
                      <option value={dictionary.components.contact.opt10}>{dictionary.components.contact.opt10}</option>
                    </select>
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label
                      htmlFor="form-mensaje"
                      className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
                    >
                      {dictionary.components.contact.lblMsg}
                    </label>
                    <textarea
                      id="form-mensaje"
                      required
                      rows={4}
                      placeholder={dictionary.components.contact.phMsg}
                      value={formData.mensaje}
                      onChange={(e) => {
                        setFormData({ ...formData, mensaje: e.target.value });
                        if (errors.mensaje) setErrors({ ...errors, mensaje: "" });
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950 text-white text-sm border focus:outline-none transition-all ${
                        errors.mensaje
                          ? "border-rose-500 focus:ring-2 focus:ring-rose-500"
                          : "border-slate-700 focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
                      }`}
                    />
                    {errors.mensaje && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.mensaje}</span>
                      </p>
                    )}
                  </div>

                  {/* Checkbox Privacidad */}
                  <div>
                    <div className="flex items-start gap-2.5">
                      <input
                        id="form-privacidad"
                        type="checkbox"
                        checked={formData.privacidad}
                        onChange={(e) => {
                          setFormData({ ...formData, privacidad: e.target.checked });
                          if (errors.privacidad) setErrors({ ...errors, privacidad: "" });
                        }}
                        className="mt-1 rounded bg-slate-950 border-slate-700 text-sky-500 focus:ring-sky-500 w-4 h-4 cursor-pointer"
                      />
                      <label htmlFor="form-privacidad" className="text-xs text-slate-400 cursor-pointer">
                        {dictionary.components.contact.privacyPrefix}
                        <span className="text-sky-400 underline font-medium">
                          {dictionary.components.contact.privacyLink}
                        </span>{" "}
                        para la gestión y respuesta de mi solicitud comercial.
                      </label>
                    </div>
                    {errors.privacidad && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.privacidad}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 shadow-lg shadow-sky-600/30 transition-all duration-200 disabled:opacity-50 text-base"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>{dictionary.components.contact.btnSubmitting}</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>{dictionary.components.contact.btnSubmit}</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
