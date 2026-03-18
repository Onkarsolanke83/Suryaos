import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { 
  Home, Lightbulb, GitBranch, Crown, FolderKanban, CheckSquare, Users, 
  MessageSquare, Brain, Zap, Rocket, Target, BarChart3, Trophy, User, 
  Shield, UserCog, Building2, Sun, Moon, Bell, Search, Plus, X, Check,
  ChevronRight, ChevronDown, Clock, Calendar, Phone, Mail, MapPin,
  TrendingUp, TrendingDown, AlertCircle, AlertTriangle, Sparkles,
  Send, Copy, ExternalLink, Edit, Trash2, MoreVertical, Filter,
  RefreshCw, Download, Upload, Settings, LogOut, Eye, EyeOff,
  Star, Heart, ThumbsUp, ThumbsDown, MessageCircle, Share2,
  PlayCircle, PauseCircle, StopCircle, ArrowRight, ArrowLeft,
  ChevronUp, Menu, Grip, Layers, Database, Globe, Link, Webhook,
  FileText, Image, Video, Mic, Volume2, VolumeX, Wifi, WifiOff,
  Battery, BatteryCharging, Cpu, HardDrive, Monitor, Smartphone,
  Tablet, Watch, Camera, Headphones, Speaker, Printer, ScanLine,
  QrCode, Barcode, Tag, Bookmark, Flag, Award, Gift, ShoppingCart,
  CreditCard, DollarSign, Percent, PieChart, Activity, Gauge,
  Thermometer, Droplet, Wind, CloudSun, Sunrise, Sunset, Flame,
  Leaf, Trees, Mountain, Waves, Anchor, Compass, Map, Navigation,
  Car, Bus, Train, Plane, Ship, Bike, Footprints, Route, Milestone,
  Play, Pause, Edit3, Table, IndianRupee, LayoutDashboard, Key,
  UserPlus, UserX, UserCheck, CheckCircle, MessageSquarePlus, Briefcase
} from 'lucide-react';

/* ════════════════════════════════════════════════════════════════════════════
   SURYA OS — Internal Team Intelligence Platform
   SuryaSetu Energy Solutions, Pune, India
   AIC-MIT ADT Incubated Startup
   ════════════════════════════════════════════════════════════════════════════ */

// ═══════════════════════════════════════════════════════════════════════════════
// GLOBAL STYLES — Injected into document head
// ═══════════════════════════════════════════════════════════════════════════════
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');

  :root {
    --bg: #080C14;
    --bg2: #0D1117;
    --bg3: #111827;
    --bg4: #1E2530;
    --border: rgba(255,255,255,0.07);
    --border2: rgba(255,255,255,0.12);
    --sun: #FF8C00;
    --sun2: #FFB347;
    --green: #00D68F;
    --blue: #3B82F6;
    --purple: #8B5CF6;
    --pink: #EC4899;
    --red: #EF4444;
    --amber: #F59E0B;
    --teal: #14B8A6;
    --tx: #F1F5F9;
    --tx2: #94A3B8;
    --tx3: #64748B;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }

  body {
    font-family: 'DM Sans', sans-serif;
    background: var(--bg);
    color: var(--tx);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
  }

  /* Scrollbar Styling */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-track {
    background: var(--bg2);
  }
  ::-webkit-scrollbar-thumb {
    background: var(--border2);
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: var(--tx3);
  }

  /* Card Base */
  .card {
    background: var(--bg3);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 16px;
  }

  .card-elevated {
    background: var(--bg4);
    border: 1px solid var(--border2);
    border-radius: 12px;
    padding: 16px;
  }

  /* Button Base Styles */
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 10px 16px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    border: none;
    outline: none;
  }
  .btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .btn-primary {
    background: var(--sun);
    color: #fff;
  }
  .btn-primary:hover:not(:disabled) {
    background: #e67e00;
    transform: translateY(-1px);
  }

  .btn-ghost {
    background: rgba(255,255,255,0.06);
    color: var(--tx2);
    border: 1px solid var(--border);
  }
  .btn-ghost:hover:not(:disabled) {
    background: rgba(255,255,255,0.1);
    color: var(--tx);
  }

  .btn-green {
    background: var(--green);
    color: #000;
  }
  .btn-green:hover:not(:disabled) {
    background: #00c27f;
    transform: translateY(-1px);
  }

  .btn-purple {
    background: var(--purple);
    color: #fff;
  }
  .btn-purple:hover:not(:disabled) {
    background: #7c4deb;
    transform: translateY(-1px);
  }

  .btn-red {
    background: rgba(239,68,68,0.15);
    color: var(--red);
  }
  .btn-red:hover:not(:disabled) {
    background: rgba(239,68,68,0.25);
  }

  .btn-blue {
    background: var(--blue);
    color: #fff;
  }
  .btn-blue:hover:not(:disabled) {
    background: #2563eb;
    transform: translateY(-1px);
  }

  .btn-sm {
    padding: 6px 12px;
    font-size: 12px;
  }

  .btn-xs {
    padding: 4px 8px;
    font-size: 11px;
  }

  .btn-icon {
    padding: 8px;
    border-radius: 8px;
  }

  /* Input Base Styles */
  .input {
    width: 100%;
    padding: 10px 14px;
    background: var(--bg2);
    border: 1px solid var(--border);
    border-radius: 8px;
    color: var(--tx);
    font-size: 14px;
    outline: none;
    transition: border-color 0.2s;
  }
  .input:focus {
    border-color: var(--sun);
  }
  .input::placeholder {
    color: var(--tx3);
  }

  .textarea {
    width: 100%;
    padding: 12px 14px;
    background: var(--bg2);
    border: 1px solid var(--border);
    border-radius: 8px;
    color: var(--tx);
    font-size: 14px;
    outline: none;
    resize: vertical;
    min-height: 80px;
    transition: border-color 0.2s;
    font-family: inherit;
  }
  .textarea:focus {
    border-color: var(--sun);
  }

  .select {
    width: 100%;
    padding: 10px 14px;
    background: var(--bg2);
    border: 1px solid var(--border);
    border-radius: 8px;
    color: var(--tx);
    font-size: 14px;
    outline: none;
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%2394A3B8' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10l-5 5z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 12px center;
  }
  .select:focus {
    border-color: var(--sun);
  }

  /* Badge Styles */
  .badge {
    display: inline-flex;
    align-items: center;
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .badge-sun { background: rgba(255,140,0,0.15); color: var(--sun); }
  .badge-green { background: rgba(0,214,143,0.15); color: var(--green); }
  .badge-blue { background: rgba(59,130,246,0.15); color: var(--blue); }
  .badge-purple { background: rgba(139,92,246,0.15); color: var(--purple); }
  .badge-pink { background: rgba(236,72,153,0.15); color: var(--pink); }
  .badge-red { background: rgba(239,68,68,0.15); color: var(--red); }
  .badge-amber { background: rgba(245,158,11,0.15); color: var(--amber); }
  .badge-teal { background: rgba(20,184,166,0.15); color: var(--teal); }
  .badge-gray { background: rgba(148,163,184,0.15); color: var(--tx2); }

  /* Status Dots */
  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex-shrink: 0;
  }
  .dot-online { background: var(--green); box-shadow: 0 0 8px var(--green); }
  .dot-away { background: var(--amber); box-shadow: 0 0 8px var(--amber); }
  .dot-offline { background: var(--tx3); }
  .dot-live { background: var(--green); animation: pulse 2s infinite; }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  /* Priority Dots */
  .pri-high { background: var(--red); }
  .pri-med { background: var(--amber); }
  .pri-low { background: var(--blue); }

  /* Progress Bar */
  .progress-bar {
    width: 100%;
    height: 8px;
    background: var(--bg2);
    border-radius: 4px;
    overflow: hidden;
  }
  .progress-fill {
    height: 100%;
    border-radius: 4px;
    transition: width 0.5s ease;
  }

  /* Avatar */
  .avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-weight: 600;
    text-transform: uppercase;
    flex-shrink: 0;
  }
  .avatar-sm { width: 28px; height: 28px; font-size: 10px; }
  .avatar-md { width: 36px; height: 36px; font-size: 12px; }
  .avatar-lg { width: 48px; height: 48px; font-size: 16px; }
  .avatar-xl { width: 64px; height: 64px; font-size: 20px; }

  /* Modal Overlay */
  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.7);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    animation: fadeIn 0.2s ease;
  }

  .modal-card {
    background: var(--bg3);
    border: 1px solid var(--border2);
    border-radius: 16px;
    padding: 24px;
    max-width: 90vw;
    max-height: 90vh;
    overflow-y: auto;
    animation: slideUp 0.3s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* Toast */
  .toast-container {
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 200;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .toast {
    padding: 14px 20px;
    background: var(--bg4);
    border: 1px solid var(--border2);
    border-radius: 10px;
    color: var(--tx);
    font-size: 14px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.4);
    animation: toastIn 0.3s ease;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .toast-success { border-left: 3px solid var(--green); }
  .toast-error { border-left: 3px solid var(--red); }
  .toast-warning { border-left: 3px solid var(--amber); }
  .toast-info { border-left: 3px solid var(--blue); }

  @keyframes toastIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* Sidebar */
  .sidebar {
    width: 240px;
    background: var(--bg2);
    border-right: 1px solid var(--border);
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 50;
  }

  .sidebar-nav-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 16px;
    color: var(--tx2);
    cursor: pointer;
    transition: all 0.2s;
    border-radius: 8px;
    margin: 2px 8px;
    position: relative;
  }
  .sidebar-nav-item:hover {
    background: rgba(255,255,255,0.05);
    color: var(--tx);
  }
  .sidebar-nav-item.active {
    background: rgba(255,140,0,0.1);
    color: var(--sun);
  }

  .nav-badge {
    position: absolute;
    right: 8px;
    background: var(--red);
    color: #fff;
    font-size: 10px;
    font-weight: 700;
    padding: 2px 6px;
    border-radius: 10px;
    min-width: 18px;
    text-align: center;
  }

  /* Main Content */
  .main-content {
    margin-left: 240px;
    height: 100vh;
    overflow-y: auto;
    background: var(--bg);
  }

  .topbar {
    height: 60px;
    background: var(--bg2);
    border-bottom: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    position: sticky;
    top: 0;
    z-index: 40;
  }

  .page-content {
    padding: 24px;
  }

  /* Growth Ring Animation */
  .growth-ring {
    transform: rotate(-90deg);
  }
  .growth-ring circle {
    fill: none;
    stroke-linecap: round;
  }
  .growth-ring .bg-ring {
    stroke: var(--bg2);
  }
  .growth-ring .progress-ring {
    stroke: var(--sun);
    transition: stroke-dashoffset 1s ease;
  }

  /* Kanban Board */
  .kanban-board {
    display: flex;
    gap: 16px;
    overflow-x: auto;
    padding-bottom: 16px;
  }
  .kanban-column {
    min-width: 280px;
    max-width: 280px;
    background: var(--bg2);
    border: 1px solid var(--border);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    max-height: calc(100vh - 280px);
  }
  .kanban-header {
    padding: 16px;
    border-bottom: 1px solid var(--border);
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .kanban-cards {
    flex: 1;
    overflow-y: auto;
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  /* Stat Card Grid */
  .stat-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
    margin-bottom: 24px;
  }

  .stat-card {
    background: var(--bg3);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .stat-card-icon {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 4px;
  }
  .stat-card-value {
    font-family: 'Syne', sans-serif;
    font-size: 28px;
    font-weight: 700;
    color: var(--tx);
  }
  .stat-card-label {
    font-size: 13px;
    color: var(--tx2);
  }

  /* Tabs */
  .tabs {
    display: flex;
    gap: 4px;
    background: var(--bg2);
    padding: 4px;
    border-radius: 10px;
    margin-bottom: 20px;
  }
  .tab {
    padding: 10px 20px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    color: var(--tx2);
    cursor: pointer;
    transition: all 0.2s;
  }
  .tab:hover {
    color: var(--tx);
  }
  .tab.active {
    background: var(--sun);
    color: #fff;
  }

  /* Empty State */
  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 20px;
    color: var(--tx3);
    text-align: center;
  }
  .empty-state svg {
    width: 48px;
    height: 48px;
    margin-bottom: 16px;
    opacity: 0.5;
  }
  .empty-state h3 {
    font-size: 16px;
    color: var(--tx2);
    margin-bottom: 8px;
  }
  .empty-state p {
    font-size: 14px;
  }

  /* WhatsApp Script Block */
  .wa-script {
    background: rgba(0,214,143,0.08);
    border: 1px solid rgba(0,214,143,0.2);
    border-radius: 10px;
    padding: 14px;
    margin-top: 12px;
    font-size: 13px;
    line-height: 1.6;
    color: var(--tx2);
  }
  .wa-script-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-weight: 600;
    color: var(--green);
    font-size: 12px;
  }

  /* Chat Bubbles */
  .chat-bubble {
    max-width: 70%;
    padding: 12px 16px;
    border-radius: 16px;
    font-size: 14px;
    line-height: 1.5;
    position: relative;
  }
  .chat-bubble.sent {
    background: var(--sun);
    color: #fff;
    border-bottom-right-radius: 4px;
    margin-left: auto;
  }
  .chat-bubble.received {
    background: var(--bg4);
    color: var(--tx);
    border-bottom-left-radius: 4px;
  }
  .chat-time {
    font-size: 10px;
    color: var(--tx3);
    margin-top: 4px;
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .chat-bubble.sent .chat-time {
    color: rgba(255,255,255,0.7);
    justify-content: flex-end;
  }

  /* AI Block */
  .ai-block {
    background: rgba(139,92,246,0.08);
    border: 1px solid rgba(139,92,246,0.2);
    border-radius: 12px;
    padding: 16px;
    margin-top: 12px;
  }
  .ai-block-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
    color: var(--purple);
    font-weight: 600;
    font-size: 13px;
  }

  /* Login Screen */
  .login-screen {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--bg) 0%, #0f1520 100%);
    position: relative;
    overflow: hidden;
  }
  .login-screen::before {
    content: '';
    position: absolute;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(255,140,0,0.1) 0%, transparent 70%);
    top: -200px;
    right: -200px;
  }
  .login-screen::after {
    content: '';
    position: absolute;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%);
    bottom: -150px;
    left: -150px;
  }

  .login-card {
    background: var(--bg3);
    border: 1px solid var(--border2);
    border-radius: 20px;
    padding: 40px;
    width: 100%;
    max-width: 400px;
    position: relative;
    z-index: 1;
    box-shadow: 0 20px 60px rgba(0,0,0,0.4);
  }

  .login-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-bottom: 32px;
  }
  .login-logo-icon {
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, var(--sun) 0%, var(--sun2) 100%);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 20px rgba(255,140,0,0.3);
  }
  .login-logo-text {
    font-family: 'Syne', sans-serif;
    font-size: 28px;
    font-weight: 800;
    background: linear-gradient(135deg, var(--tx) 0%, var(--tx2) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* Pipeline Stage */
  .pipeline-stage {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background: var(--bg3);
    border: 1px solid var(--border);
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.2s;
    min-width: 140px;
  }
  .pipeline-stage:hover {
    border-color: var(--sun);
    transform: translateY(-2px);
  }
  .pipeline-stage-count {
    font-family: 'Syne', sans-serif;
    font-size: 32px;
    font-weight: 700;
    color: var(--tx);
  }
  .pipeline-stage-label {
    font-size: 12px;
    color: var(--tx2);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-top: 4px;
  }

  /* Loading Spinner */
  .spinner {
    width: 16px;
    height: 16px;
    border: 2px solid currentColor;
    border-top-color: transparent;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  /* Checkbox */
  .checkbox {
    width: 18px;
    height: 18px;
    border: 2px solid var(--border2);
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
    flex-shrink: 0;
  }
  .checkbox:hover {
    border-color: var(--sun);
  }
  .checkbox.checked {
    background: var(--green);
    border-color: var(--green);
  }

  /* Accordion */
  .accordion-item {
    background: var(--bg3);
    border: 1px solid var(--border);
    border-radius: 10px;
    margin-bottom: 8px;
    overflow: hidden;
  }
  .accordion-header {
    padding: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: background 0.2s;
  }
  .accordion-header:hover {
    background: rgba(255,255,255,0.03);
  }
  .accordion-content {
    padding: 0 16px 16px;
    color: var(--tx2);
    font-size: 14px;
    line-height: 1.7;
  }

  /* Chart Container */
  .chart-container {
    position: relative;
    height: 300px;
    background: var(--bg3);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 20px;
  }

  /* Table */
  .table-container {
    overflow-x: auto;
    background: var(--bg3);
    border: 1px solid var(--border);
    border-radius: 12px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    padding: 14px 16px;
    text-align: left;
    border-bottom: 1px solid var(--border);
  }
  th {
    font-size: 12px;
    font-weight: 600;
    color: var(--tx3);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    background: var(--bg2);
  }
  td {
    font-size: 14px;
    color: var(--tx);
  }
  tr:hover td {
    background: rgba(255,255,255,0.02);
  }
  tr:last-child td {
    border-bottom: none;
  }
`;

// ═══════════════════════════════════════════════════════════════════════════════
// ENCRYPTION SYSTEM
// ═══════════════════════════════════════════════════════════════════════════════
const SESSION_KEY = 'SuryaOS2026@AIC-MITADT-Pune';
const HASH_PREFIX = 'sha256:';
const ACTIVE_USER_KEY = 'suryaos.activeUser';
const ACTIVE_PAGE_KEY = 'suryaos.activePage';

function _encLegacy(s) {
  if (!s) return '';
  let result = '';
  for (let i = 0; i < s.length; i++) {
    const xorVal = s.charCodeAt(i) ^ SESSION_KEY.charCodeAt(i % SESSION_KEY.length);
    result += xorVal.toString(16).padStart(2, '0');
  }
  return result;
}

function _decLegacy(e) {
  if (!e) return '';
  try {
    let result = '';
    for (let i = 0; i < e.length; i += 2) {
      const xorVal = parseInt(e.substr(i, 2), 16);
      result += String.fromCharCode(xorVal ^ SESSION_KEY.charCodeAt((i/2) % SESSION_KEY.length));
    }
    return result;
  } catch {
    return '';
  }
}

async function _hashPassword(plain) {
  if (!plain) return '';
  const enc = new TextEncoder().encode(plain);
  const digest = await crypto.subtle.digest('SHA-256', enc);
  const bytes = Array.from(new Uint8Array(digest));
  const hex = bytes.map((b) => b.toString(16).padStart(2, '0')).join('');
  return `${HASH_PREFIX}${hex}`;
}

function _isHashedPassword(hash) {
  return typeof hash === 'string' && hash.startsWith(HASH_PREFIX);
}

async function _chk(hash, plain) {
  if (!hash) return false;

  if (_isHashedPassword(hash)) {
    const candidate = await _hashPassword(plain);
    return candidate === hash;
  }

  return _decLegacy(hash) === plain;
}

// ═══════════════════════════════════════════════════════════════════════════════
// UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════════

// Format value (₹XL / ₹XK / ₹X)
function fv(val) {
  if (!val && val !== 0) return '₹0';
  const num = Number(val);
  if (num >= 100000) return `₹${(num / 100000).toFixed(1)}L`;
  if (num >= 1000) return `₹${(num / 1000).toFixed(0)}K`;
  return `₹${num}`;
}

// Format date (Indian format)
function fd2(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

// Relative timestamp
function ts(dateStr) {
  if (!dateStr) return '';
  const now = new Date();
  const d = new Date(dateStr);
  const diff = Math.floor((now - d) / 1000);
  
  if (diff < 60) return 'just now';
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  if (diff < 604800) return `${Math.floor(diff / 86400)}d ago`;
  return fd2(dateStr);
}

// Check if date is overdue
function isOD(dateStr) {
  if (!dateStr) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const d = new Date(dateStr);
  d.setHours(0, 0, 0, 0);
  return d < today;
}

// Check if date is today
function isToday(dateStr) {
  if (!dateStr) return false;
  const today = new Date();
  const d = new Date(dateStr);
  return d.toDateString() === today.toDateString();
}

// Generate unique ID
function genId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}

// Days until date
function daysUntil(dateStr) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(dateStr);
  target.setHours(0, 0, 0, 0);
  return Math.ceil((target - today) / (1000 * 60 * 60 * 24));
}

// Format session duration
function formatDuration(ms) {
  const secs = Math.floor(ms / 1000);
  const h = Math.floor(secs / 3600);
  const m = Math.floor((secs % 3600) / 60);
  const s = secs % 60;
  return `${h}h ${m.toString().padStart(2, '0')}m ${s.toString().padStart(2, '0')}s`;
}

function getStartOfWeek(baseDate = new Date()) {
  const d = new Date(baseDate);
  d.setHours(0, 0, 0, 0);
  const day = d.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  d.setDate(d.getDate() + diff);
  return d;
}

function getWeeklyMinutesFromSessions(sessions, weekStart, nowMs = Date.now()) {
  if (!Array.isArray(sessions) || sessions.length === 0) return 0;

  const weekStartMs = weekStart.getTime();
  let total = 0;

  for (const session of sessions) {
    if (!session?.login) continue;
    const startMs = new Date(session.login).getTime();
    const endMs = session.logout ? new Date(session.logout).getTime() : nowMs;
    if (Number.isNaN(startMs) || Number.isNaN(endMs)) continue;
    if (endMs <= startMs) continue;

    const boundedStart = Math.max(startMs, weekStartMs);
    if (endMs <= boundedStart) continue;

    total += Math.floor((endMs - boundedStart) / 60000);
  }

  return total;
}

function minutesToLabel(mins) {
  const safe = Number.isFinite(mins) ? Math.max(0, Math.floor(mins)) : 0;
  const h = Math.floor(safe / 60);
  const m = safe % 60;
  return h > 0 ? `${h}h ${m}m` : `${m}m`;
}

// ═══════════════════════════════════════════════════════════════════════════════
// INITIAL DATA — PRE-SEEDED
// ═══════════════════════════════════════════════════════════════════════════════

const INITIAL_USERS = {
  onkar: {
    pass: _encLegacy('solar123'),
    name: 'Onkar Jadhav',
    role: 'owner',
    dept: 'CEO',
    av: 'OJ',
    col: '#FF8C00',
    phone: '+91 98765 43210',
    bio: 'Founder & CEO | Building Surya Energy to democratize solar in Tier 2/3 India',
    status: 'offline',
    active: true,
    loginTime: null,
    totalLogins: 47,
    lastSeen: '2026-03-11T18:30:00',
    sessions: []
  },
  riya: {
    pass: _encLegacy('solar123'),
    name: 'Riya Sharma',
    role: 'manager',
    dept: 'Sales',
    av: 'RS',
    col: '#00D68F',
    phone: '+91 98765 43211',
    bio: 'Sales Head | Closing deals and building customer relationships',
    status: 'offline',
    active: true,
    loginTime: null,
    totalLogins: 34,
    lastSeen: '2026-03-11T17:45:00',
    sessions: []
  },
  aman: {
    pass: _encLegacy('solar123'),
    name: 'Aman Deshmukh',
    role: 'member',
    dept: 'Marketing',
    av: 'AD',
    col: '#EC4899',
    phone: '+91 98765 43212',
    bio: 'Marketing Lead | Creating content that converts',
    status: 'offline',
    active: true,
    loginTime: null,
    totalLogins: 28,
    lastSeen: '2026-03-11T16:20:00',
    sessions: []
  },
  priya: {
    pass: _encLegacy('solar123'),
    name: 'Priya Kulkarni',
    role: 'member',
    dept: 'Operations',
    av: 'PK',
    col: '#3B82F6',
    phone: '+91 98765 43213',
    bio: 'Operations Manager | Making sure installations happen smoothly',
    status: 'offline',
    active: true,
    loginTime: null,
    totalLogins: 22,
    lastSeen: '2026-03-11T15:00:00',
    sessions: []
  },
  'dr.desai': {
    pass: _encLegacy('solar123'),
    name: 'Dr. Vikram Desai',
    role: 'mentor',
    dept: 'Advisory',
    av: 'VD',
    col: '#8B5CF6',
    phone: '+91 98765 43214',
    bio: 'Industry Mentor | 20+ years in renewable energy sector',
    status: 'offline',
    active: true,
    isMentor: true,
    loginTime: null,
    totalLogins: 8,
    lastSeen: '2026-03-10T14:00:00',
    sessions: []
  }
};

const INITIAL_LEADS = [
  {
    id: 'ld1',
    name: 'Rajesh Patil',
    area: 'Hadapsar',
    size: '3kW',
    temp: 'hot',
    stage: 'proposal',
    val: 180000,
    notes: 'Very interested. Bill ₹6000/month. Has terrace space. Wife also supportive.'
  },
  {
    id: 'ld2',
    name: 'Sunita Joshi',
    area: 'Pashan',
    size: '5kW+',
    temp: 'hot',
    stage: 'nego',
    val: 380000,
    notes: 'Large bungalow. Wants premium panels. Ready to pay more for warranty.'
  },
  {
    id: 'ld3',
    name: 'Amit Kulkarni',
    area: 'Wagholi',
    size: '2kW',
    temp: 'warm',
    stage: 'site',
    val: 120000,
    notes: 'New construction. Interested in subsidy. Site visit done.'
  },
  {
    id: 'ld4',
    name: 'Sneha Deshpande',
    area: 'Kharadi',
    size: '4kW',
    temp: 'warm',
    stage: 'contacted',
    val: 240000,
    notes: 'IT professional. Understanding tech well. Comparing 3 vendors.'
  },
  {
    id: 'ld5',
    name: 'Mahesh Gaikwad',
    area: 'Loni Kalbhor',
    size: '3kW',
    temp: 'cold',
    stage: 'new',
    val: 165000,
    notes: 'Farmer. Interested for irrigation pump. Need to explain ROI.'
  },
  {
    id: 'ld6',
    name: 'Kavita Bhosale',
    area: 'Baner',
    size: '5kW+',
    temp: 'hot',
    stage: 'site',
    val: 350000,
    notes: 'Society president. If deal closes, can refer 10+ more installations.'
  },
  {
    id: 'ld7',
    name: 'Vikrant Shah',
    area: 'Hinjewadi',
    size: '2kW',
    temp: 'warm',
    stage: 'new',
    val: 90000,
    notes: 'Flat owner. Interested in balcony solar. Need hybrid solution.'
  }
];

const INITIAL_IDEAS = [
  {
    id: 'idea1',
    user: 'riya',
    cat: 'Marketing',
    title: 'WhatsApp Drip Campaign for Cold Leads',
    desc: 'Automated 7-day WhatsApp sequence for cold leads with solar education content, testimonials, and ROI calculator link. Each message in Hinglish with engaging emoji.',
    st: 'approved',
    ai: null,
    aiParsed: null,
    cc: 'Love it! Start with top 50 cold leads.',
    tasks: [],
    created: '2026-03-08T10:00:00'
  },
  {
    id: 'idea2',
    user: 'aman',
    cat: 'Content',
    title: 'Before/After Solar Bill Reel Series',
    desc: 'Instagram Reels showing actual customer electricity bills before and after installation. 30-sec format with voiceover explaining savings. Target 2 reels/week.',
    st: 'building',
    ai: null,
    aiParsed: null,
    cc: 'Approved. Aman lead this with Priya for customer stories.',
    tasks: ['Collect 5 customer bills', 'Create reel template', 'Record first 2 reels'],
    created: '2026-03-05T14:30:00'
  },
  {
    id: 'idea3',
    user: 'priya',
    cat: 'Operations',
    title: 'AMC Auto-Reminder System',
    desc: 'Automated reminder system for annual maintenance contracts. Send WhatsApp reminder 30 days before expiry, then at 15 days and 7 days. Include renewal discount offer.',
    st: 'pending',
    ai: null,
    aiParsed: null,
    cc: null,
    tasks: [],
    created: '2026-03-10T09:15:00'
  },
  {
    id: 'idea4',
    user: 'onkar',
    cat: 'Product',
    title: 'Community Solar Co-op Model',
    desc: 'For societies with 20+ flats, offer shared rooftop solar with proportional billing. One installation, multiple beneficiaries. Reduces per-household cost by 40%.',
    st: 'pending',
    ai: null,
    aiParsed: null,
    cc: null,
    tasks: [],
    created: '2026-03-11T11:00:00'
  }
];

const INITIAL_TASKS = [
  { id: 'tk1', name: 'Follow up with Rajesh (Hadapsar)', ow: 'riya', dept: 'Sales', pri: 'high', due: '2026-03-12', done: false, idea: null },
  { id: 'tk2', name: 'Prepare proposal for Sunita (5kW)', ow: 'riya', dept: 'Sales', pri: 'high', due: '2026-03-13', done: false, idea: null },
  { id: 'tk3', name: 'Create Instagram content calendar', ow: 'aman', dept: 'Marketing', pri: 'med', due: '2026-03-14', done: false, idea: null },
  { id: 'tk4', name: 'Coordinate site visit - Wagholi', ow: 'priya', dept: 'Operations', pri: 'med', due: '2026-03-13', done: false, idea: null },
  { id: 'tk5', name: 'Update CRM with new leads', ow: 'riya', dept: 'Sales', pri: 'low', due: '2026-03-15', done: true, idea: null },
  { id: 'tk6', name: 'Collect customer testimonials (3)', ow: 'aman', dept: 'Marketing', pri: 'med', due: '2026-03-16', done: false, idea: 'Before/After Solar Bill Reel Series' },
  { id: 'tk7', name: 'Finalize AIC pitch deck', ow: 'onkar', dept: 'CEO', pri: 'high', due: '2026-03-18', done: false, idea: null },
  { id: 'tk8', name: 'Train installer team on new panels', ow: 'priya', dept: 'Operations', pri: 'med', due: '2026-03-17', done: false, idea: null }
];

const INITIAL_PROJECTS = [
  {
    id: 'pj1',
    name: 'Surya OS Development',
    cat: 'Product',
    st: 'active',
    prog: 65,
    own: 'onkar',
    pri: 'high',
    due: '2026-03-20',
    desc: 'Internal team intelligence platform for unified operations',
    impact: 'Team productivity +40%, Decision speed +60%',
    block: null,
    created: '2026-02-15T08:00:00'
  },
  {
    id: 'pj2',
    name: 'WhatsApp Automation Bot',
    cat: 'Tech',
    st: 'active',
    prog: 40,
    own: 'onkar',
    pri: 'high',
    due: '2026-03-25',
    desc: 'Automated lead qualification and follow-up via WhatsApp Business API',
    impact: 'Lead response time: 24hr → 2hr',
    block: 'Waiting for WhatsApp Business API approval',
    created: '2026-02-20T10:00:00'
  },
  {
    id: 'pj3',
    name: 'AIC Grant Application',
    cat: 'Business',
    st: 'active',
    prog: 80,
    own: 'onkar',
    pri: 'high',
    due: '2026-03-15',
    desc: '₹10L seed grant application for AIC-MIT ADT',
    impact: '6-month runway, hire 2 team members',
    block: null,
    created: '2026-02-01T09:00:00'
  },
  {
    id: 'pj4',
    name: 'Customer Success Story Series',
    cat: 'Marketing',
    st: 'active',
    prog: 25,
    own: 'aman',
    pri: 'med',
    due: '2026-04-01',
    desc: '10-part video series featuring happy customers',
    impact: 'Trust building, Conversion +15%',
    block: null,
    created: '2026-03-01T11:00:00'
  },
  {
    id: 'pj5',
    name: 'Installer Partner Network',
    cat: 'Operations',
    st: 'planning',
    prog: 10,
    own: 'priya',
    pri: 'med',
    due: '2026-04-15',
    desc: 'Build network of 10 certified installers across Pune district',
    impact: 'Installation capacity 3x',
    block: null,
    created: '2026-03-05T14:00:00'
  },
  {
    id: 'pj6',
    name: 'PM Surya Ghar Campaign',
    cat: 'Sales',
    st: 'active',
    prog: 50,
    own: 'riya',
    pri: 'high',
    due: '2026-03-31',
    desc: 'Marketing campaign for PM Surya Ghar scheme awareness',
    impact: 'Hot leads +100/month',
    block: null,
    created: '2026-03-02T10:00:00'
  }
];

const INITIAL_FOLLOWUPS = [
  { id: 'fu1', lid: 'ld1', date: '2026-03-11', type: 'call', note: 'Discuss final pricing', done: false, created: '2026-03-09T10:00:00' },
  { id: 'fu2', lid: 'ld2', date: '2026-03-12', type: 'visit', note: 'Site measurement visit', done: false, created: '2026-03-10T11:00:00' },
  { id: 'fu3', lid: 'ld3', date: '2026-03-14', type: 'whatsapp', note: 'Send subsidy documents', done: false, created: '2026-03-11T09:00:00' },
  { id: 'fu4', lid: 'ld6', date: '2026-03-10', type: 'proposal', note: 'Send society bulk proposal', done: false, created: '2026-03-08T14:00:00' }
];

const INITIAL_CALL_NOTES = [];

const INITIAL_MESSAGES = {
  'aman:onkar': [
    { from: 'onkar', text: 'Aman, how\'s the Instagram content going?', time: '2026-03-11T10:30:00', read: true },
    { from: 'aman', text: 'Good progress! 3 reels ready for review. Will share by EOD.', time: '2026-03-11T10:35:00', read: true },
    { from: 'onkar', text: 'Perfect. Also think about PM Surya Ghar angle for next week.', time: '2026-03-11T10:40:00', read: false }
  ],
  'onkar:riya': [
    { from: 'riya', text: 'Onkar, Sunita ji wants premium panels. Should I quote Adani or Tata?', time: '2026-03-11T14:00:00', read: true },
    { from: 'onkar', text: 'Go with Tata. Better warranty and their 5kW is competitively priced.', time: '2026-03-11T14:15:00', read: true },
    { from: 'riya', text: 'Got it. Will prepare proposal today.', time: '2026-03-11T14:20:00', read: true },
    { from: 'onkar', text: 'Great! This could be our biggest deal this month. Keep me posted.', time: '2026-03-11T14:25:00', read: false }
  ],
  'aman:priya': [
    { from: 'aman', text: 'Priya, can you share 2-3 customer photos for the reel?', time: '2026-03-10T16:00:00', read: true },
    { from: 'priya', text: 'Sure! I\'ll get consent from Hadapsar and Kothrud customers.', time: '2026-03-10T16:30:00', read: true }
  ]
};

const INITIAL_POSTS = [
  {
    id: 'post1',
    user: 'onkar',
    type: 'vision',
    txt: 'Team, our AIC demo is in 8 days. Let\'s make sure Surya OS showcases everything we\'ve built. This platform represents our operational excellence. Every feature, every automation, every insight - it tells our story.',
    time: '2026-03-12T08:00:00'
  },
  {
    id: 'post2',
    user: 'dr.desai',
    type: 'mentor',
    txt: 'Advice from today\'s session: Focus on unit economics during AIC pitch. Show them ₹ per lead, ₹ per installation, customer acquisition cost. Numbers speak louder than vision slides.',
    time: '2026-03-10T15:00:00'
  },
  {
    id: 'post3',
    user: 'riya',
    type: 'intel',
    txt: 'Market Intel: Competitors are quoting ₹55/watt post-subsidy. We\'re at ₹52. Our advantage is installation speed (3 days vs their 7-10). Leading with delivery promise in pitches.',
    time: '2026-03-09T11:00:00'
  }
];

const INITIAL_N8N_FLOWS = [
  { id: 'fl1', name: 'Lead to CRM Sync', tool: 'n8n', trigger: 'Google Form Submit', action: 'Create Lead + Send WA', webhook: 'https://n8n.suryaenergy.in/webhook/lead-form', st: 'live', runs: 47, lastRun: '2026-03-11T16:30:00' },
  { id: 'fl2', name: 'Daily Task Digest', tool: 'n8n', trigger: 'Cron 8:00 AM', action: 'WhatsApp Summary', webhook: null, st: 'live', runs: 23, lastRun: '2026-03-12T08:00:00' },
  { id: 'fl3', name: 'Follow-up Reminder', tool: 'n8n', trigger: 'Daily 9:00 AM', action: 'Check due follow-ups → WA', webhook: null, st: 'building', runs: 0, lastRun: null },
  { id: 'fl4', name: 'Quote Generator', tool: 'n8n', trigger: 'Manual', action: 'Generate PDF Quote', webhook: 'https://n8n.suryaenergy.in/webhook/quote', st: 'building', runs: 5, lastRun: '2026-03-08T14:00:00' },
  { id: 'fl5', name: 'Instagram Post Scheduler', tool: 'n8n', trigger: 'Notion Update', action: 'Schedule IG Post', webhook: null, st: 'planned', runs: 0, lastRun: null },
  { id: 'fl6', name: 'Customer Feedback Loop', tool: 'n8n', trigger: 'Installation Complete', action: 'Send Feedback Form', webhook: null, st: 'planned', runs: 0, lastRun: null }
];

const INITIAL_NOTION_PAGES = [
  { id: 'np1', title: 'Sales Playbook', url: 'https://notion.so/surya/sales-playbook', cat: 'Sales', notes: 'Objection handling, pricing guide, competitor analysis', updated: '2026-03-10T12:00:00' },
  { id: 'np2', title: 'AIC Application Draft', url: 'https://notion.so/surya/aic-draft', cat: 'Business', notes: 'Complete grant application with financials', updated: '2026-03-11T18:00:00' },
  { id: 'np3', title: 'Product Knowledge Base', url: 'https://notion.so/surya/product-kb', cat: 'Operations', notes: 'Panel specs, inverter details, installation SOP', updated: '2026-03-09T10:00:00' },
  { id: 'np4', title: 'Content Calendar', url: 'https://notion.so/surya/content-cal', cat: 'Marketing', notes: 'March 2026 social media calendar', updated: '2026-03-11T14:00:00' }
];

const INITIAL_CONTENT = [
  { id: 'ct1', title: 'PM Surya Ghar Explainer', plat: 'Instagram', type: 'Reel', st: 'Published', topic: 'subsidy', date: '2026-03-10' },
  { id: 'ct2', title: 'Bill Savings Calculator', plat: 'Instagram', type: 'Carousel', st: 'Scheduled', topic: 'savings', date: '2026-03-13' },
  { id: 'ct3', title: 'Customer Testimonial - Kothrud', plat: 'Instagram', type: 'Reel', st: 'Edit', topic: 'testimonial', date: '2026-03-15' },
  { id: 'ct4', title: 'Solar Myths Busted', plat: 'Facebook', type: 'Post', st: 'Script', topic: 'education', date: '2026-03-17' },
  { id: 'ct5', title: 'Why Pune is Perfect for Solar', plat: 'Instagram', type: 'Reel', st: 'Idea', topic: 'local', date: '2026-03-20' }
];

const INITIAL_DEPTS = [
  { id: 'dp1', name: 'CEO Office', desc: 'Strategy, Vision, Investor Relations', head: 'onkar', emoji: '👑' },
  { id: 'dp2', name: 'Sales', desc: 'Lead management, Closures, Customer Success', head: 'riya', emoji: '💰' },
  { id: 'dp3', name: 'Marketing', desc: 'Content, Social Media, Brand Building', head: 'aman', emoji: '📢' },
  { id: 'dp4', name: 'Operations', desc: 'Installations, Vendor Management, Quality', head: 'priya', emoji: '⚙️' },
  { id: 'dp5', name: 'Advisory', desc: 'Mentorship, Strategic Guidance', head: 'dr.desai', emoji: '🎓' }
];

const INITIAL_SESSIONS = [
  { id: 'ses1', mentor: 'dr.desai', topic: 'AIC Pitch Preparation', date: '2026-03-10', notes: 'Reviewed pitch deck, suggested focusing on unit economics', status: 'done' },
  { id: 'ses2', mentor: 'dr.desai', topic: 'GTM Strategy Review', date: '2026-03-15', notes: '', status: 'upcoming' }
];

const INITIAL_AIC_CHECKLIST = [
  { id: 'ac1', item: 'Complete pitch deck (15 slides)', done: true, cat: 'Pitch' },
  { id: 'ac2', item: 'Financial projections (3 years)', done: true, cat: 'Pitch' },
  { id: 'ac3', item: 'Product demo ready', done: false, cat: 'Demo' },
  { id: 'ac4', item: 'Customer testimonial video', done: false, cat: 'Demo' },
  { id: 'ac5', item: 'Team intro slide', done: true, cat: 'Pitch' },
  { id: 'ac6', item: 'Traction metrics dashboard', done: false, cat: 'Demo' },
  { id: 'ac7', item: 'Competitive analysis', done: true, cat: 'Research' },
  { id: 'ac8', item: 'Grant utilization plan', done: true, cat: 'Pitch' },
  { id: 'ac9', item: 'Test run Surya OS', done: false, cat: 'Demo' },
  { id: 'ac10', item: 'Backup slides ready', done: false, cat: 'Pitch' },
  { id: 'ac11', item: 'Investor Q&A prep', done: false, cat: 'Prep' },
  { id: 'ac12', item: 'Final rehearsal', done: false, cat: 'Prep' }
];

const INITIAL_LOG = [
  { user: 'onkar', action: 'login', detail: 'Logged in from Pune', time: '2026-03-11T09:00:00' },
  { user: 'riya', action: 'lead_add', detail: 'Added lead: Vikrant Shah (Hinjewadi)', time: '2026-03-11T10:30:00' },
  { user: 'aman', action: 'task_done', detail: 'Completed: Create Instagram content calendar', time: '2026-03-11T14:00:00' },
  { user: 'onkar', action: 'idea_submit', detail: 'Submitted: Community Solar Co-op Model', time: '2026-03-11T11:00:00' }
];

const INITIAL_WEEKLY_GOALS = [
  {
    id: 'wg1',
    title: 'Qualified Leads',
    target: 30,
    current: 0,
    unit: 'leads',
    owner: 'riya'
  },
  {
    id: 'wg2',
    title: 'Content Outputs',
    target: 8,
    current: 0,
    unit: 'assets',
    owner: 'aman'
  },
  {
    id: 'wg3',
    title: 'Site Visits Completed',
    target: 12,
    current: 0,
    unit: 'visits',
    owner: 'priya'
  }
];

const INITIAL_STRATEGY_ITEMS = [
  {
    id: 'st1',
    title: 'Win Hot Leads in 24h',
    owner: 'riya',
    status: 'active',
    detail: 'Every hot lead gets call + WhatsApp + proposal on same day.'
  },
  {
    id: 'st2',
    title: 'Proof-Driven Content Sprint',
    owner: 'aman',
    status: 'active',
    detail: 'Publish before/after bill stories and 2 customer testimonials this week.'
  },
  {
    id: 'st3',
    title: 'Install Quality Playbook',
    owner: 'priya',
    status: 'active',
    detail: 'Standardize pre-install checklist and reduce rework to near zero.'
  }
];

const LEAD_SCORES = {};

// WhatsApp Templates
const WA_TEMPLATES = {
  hot: (name, area) => `Namaste ${name}! ☀️ Main Surya Energy se Onkar bol raha hoon. Aapke ${area} wale solar query ke baare mein baat karni thi. Aapka monthly bill ₹5000 se ₹500 tak kam ho sakta hai. Kya aaj 10 min call ho sakti hai?`,
  warm: (name) => `Hi ${name}, Surya Energy se follow up kar raha hoon. Solar installation ki baat chal rahi thi — PM Surya Ghar scheme mein ₹78,000 subsidy available hai aapke liye. Detail bhejun kya?`,
  cold: (name) => `Hello ${name}! Solar energy se interested hain? Pune mein 3kW system install karne pe sirf ₹72,000 aata hai subsidy ke baad. Free site visit arrange kar sakte hain. Reply karein!`
};

// Motivational Quotes
const QUOTES = [
  { text: "The sun doesn't compete with the streetlight. It just shines.", author: "Unknown" },
  { text: "Solar energy is the future. Build for tomorrow.", author: "Surya OS" },
  { text: "Every installation is a family saved from rising bills.", author: "Onkar Jadhav" },
  { text: "Hustle in silence. Let your installations make the noise.", author: "Team Surya" },
  { text: "Tier 2 India is waiting. We're the answer.", author: "AIC Vision" },
  { text: "One rooftop at a time, we're changing Pune.", author: "Surya Setu" }
];

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN APP COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════
export default function SuryaOS() {
  // Inject global styles
  useEffect(() => {
    const styleEl = document.createElement('style');
    styleEl.textContent = globalStyles;
    document.head.appendChild(styleEl);
    return () => document.head.removeChild(styleEl);
  }, []);

  // ═══════════════════════════════════════════════════════════════════════════
  // STATE
  // ═══════════════════════════════════════════════════════════════════════════
  
  // Auth State
  const [user, setUser] = useState(() => {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem(ACTIVE_USER_KEY) || null;
  });
  const [loginUser, setLoginUser] = useState('');
  const [loginPass, setLoginPass] = useState('');
  const [loginError, setLoginError] = useState('');
  const [showPass, setShowPass] = useState(false);

  // App State
  const [page, setPage] = useState(() => {
    if (typeof window === 'undefined') return 'home';
    return localStorage.getItem(ACTIVE_PAGE_KEY) || 'home';
  });
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 1024 : false
  );
  const [sessionTime, setSessionTime] = useState(0);
  const [sessionInterval, setSessionIntervalId] = useState(null);

  // Data State
  const [users, setUsers] = useState(INITIAL_USERS);
  const [leads, setLeads] = useState(INITIAL_LEADS);
  const [ideas, setIdeas] = useState(INITIAL_IDEAS);
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [projects, setProjects] = useState(INITIAL_PROJECTS);
  const [followups, setFollowups] = useState(INITIAL_FOLLOWUPS);
  const [callNotes, setCallNotes] = useState(INITIAL_CALL_NOTES);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [posts, setPosts] = useState(INITIAL_POSTS);
  const [n8nFlows, setN8nFlows] = useState(INITIAL_N8N_FLOWS);
  const [notionPages, setNotionPages] = useState(INITIAL_NOTION_PAGES);
  const [content, setContent] = useState(INITIAL_CONTENT);
  const [depts, setDepts] = useState(INITIAL_DEPTS);
  const [sessions, setSessions] = useState(INITIAL_SESSIONS);
  const [aicChecklist, setAicChecklist] = useState(INITIAL_AIC_CHECKLIST);
  const [weeklyGoals, setWeeklyGoals] = useState(INITIAL_WEEKLY_GOALS);
  const [strategyItems, setStrategyItems] = useState(INITIAL_STRATEGY_ITEMS);
  const [log, setLog] = useState(INITIAL_LOG);
  const [leadScores, setLeadScores] = useState(LEAD_SCORES);

  // UI State
  const [toasts, setToasts] = useState([]);
  const [modal, setModal] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [apiKey, setApiKey] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const saveTimerRef = useRef(null);
  const lastServerUpdatedAtRef = useRef(null);
  const suppressNextSaveRef = useRef(false);
  const lastActivityPingRef = useRef(0);

  // Search & Filter State
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTab, setFilterTab] = useState('all');
  const [filterDept, setFilterDept] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterTemp, setFilterTemp] = useState('all');
  const [projFilter, setProjFilter] = useState('all');
  const [taskFilter, setTaskFilter] = useState('all');
  const [taskSort, setTaskSort] = useState('due');
  const [pulseTab, setPulseTab] = useState('overview');
  const [aicTab, setAicTab] = useState('overview');
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [autoTab, setAutoTab] = useState('flows');
  const [adminTab, setAdminTab] = useState('overview');
  const [systemDiag, setSystemDiag] = useState(null);
  const [systemDiagLoading, setSystemDiagLoading] = useState(false);
  const [systemDiagError, setSystemDiagError] = useState('');

  // Messages State
  const [activeChat, setActiveChat] = useState(null);
  const [newMsg, setNewMsg] = useState('');
  const [selectedConvo, setSelectedConvo] = useState(null);
  const [msgInput, setMsgInput] = useState('');
  const [showNewDM, setShowNewDM] = useState(false);
  const [msgSearchTerm, setMsgSearchTerm] = useState('');

  // Form States
  const [ideaForm, setIdeaForm] = useState({ title: '', cat: 'Marketing', desc: '' });
  const [leadForm, setLeadForm] = useState({ name: '', area: '', size: '3kW', temp: 'warm', stage: 'new', val: '', notes: '' });
  const [followupForm, setFollowupForm] = useState({ lid: '', date: '', type: 'call', note: '' });
  const [callNoteForm, setCallNoteForm] = useState({ lid: '', outcome: 'neutral', nextDate: '', notes: '' });
  const [taskForm, setTaskForm] = useState({ name: '', ow: '', dept: '', pri: 'med', due: '', idea: '' });
  const [projectForm, setProjectForm] = useState({ name: '', cat: '', st: 'planning', prog: 0, own: '', pri: 'med', due: '', desc: '', impact: '', block: '' });
  const [userForm, setUserForm] = useState({ username: '', name: '', role: 'member', dept: '', phone: '', bio: '', pass: '' });
  const [deptForm, setDeptForm] = useState({ name: '', desc: '', head: '', emoji: '📁' });
  const [autoForm, setAutoForm] = useState({ name: '', trigger: '', action: '', webhook: '', st: 'planned' });
  const [ceoComment, setCeoComment] = useState({});

  // ═══════════════════════════════════════════════════════════════════════════
  // BADGES (computed)
  // ═══════════════════════════════════════════════════════════════════════════
  const badges = useMemo(() => {
    const overdueFollowups = followups.filter(f => !f.done && isOD(f.date)).length;
    const todayFollowups = followups.filter(f => !f.done && isToday(f.date)).length;
    const myPendingTasks = user ? tasks.filter(t => !t.done && t.ow === user).length : 0;
    const unreadMsgs = user ? Object.entries(messages).reduce((acc, [key, msgs]) => {
      if (key.includes(user)) {
        return acc + msgs.filter(m => m.from !== user && !m.read).length;
      }
      return acc;
    }, 0) : 0;
    const pendingIdeas = ideas.filter(i => i.st === 'pending').length;
    const blockedProjects = projects.filter(p => p.st === 'blocked' || p.block).length;

    return {
      followups: overdueFollowups + todayFollowups,
      tasks: myPendingTasks,
      messages: unreadMsgs,
      ideas: pendingIdeas,
      projects: blockedProjects
    };
  }, [followups, tasks, user, messages, ideas, projects]);

  // ═══════════════════════════════════════════════════════════════════════════
  // TOAST SYSTEM
  // ═══════════════════════════════════════════════════════════════════════════
  const toast = useCallback((msg, type = 'info') => {
    const id = genId();
    setToasts(t => [...t, { id, msg, type }]);
    setTimeout(() => {
      setToasts(t => t.filter(x => x.id !== id));
    }, 2800);
  }, []);

  const applyRemoteState = useCallback((state) => {
    if (!state || typeof state !== 'object') return;

    // Avoid immediate re-save loop when applying server updates.
    suppressNextSaveRef.current = true;

    if (state.users) setUsers(state.users);
    if (state.leads) setLeads(state.leads);
    if (state.ideas) setIdeas(state.ideas);
    if (state.tasks) setTasks(state.tasks);
    if (state.projects) setProjects(state.projects);
    if (state.followups) setFollowups(state.followups);
    if (state.callNotes) setCallNotes(state.callNotes);
    if (state.messages) setMessages(state.messages);
    if (state.posts) setPosts(state.posts);
    if (state.n8nFlows) setN8nFlows(state.n8nFlows);
    if (state.notionPages) setNotionPages(state.notionPages);
    if (state.content) setContent(state.content);
    if (state.depts) setDepts(state.depts);
    if (state.sessions) setSessions(state.sessions);
    if (state.aicChecklist) setAicChecklist(state.aicChecklist);
    if (state.weeklyGoals) setWeeklyGoals(state.weeklyGoals);
    if (state.strategyItems) setStrategyItems(state.strategyItems);
    if (state.log) setLog(state.log);
    if (state.leadScores) setLeadScores(state.leadScores);
  }, []);

  const pullLatestState = useCallback(async () => {
    try {
      const res = await fetch('/api/state');
      if (!res.ok) return;

      const payload = await res.json();
      const incomingUpdatedAt = payload?.updatedAt || null;

      if (!incomingUpdatedAt || incomingUpdatedAt === lastServerUpdatedAtRef.current) {
        return;
      }

      lastServerUpdatedAtRef.current = incomingUpdatedAt;
      applyRemoteState(payload?.state);
    } catch (err) {
      console.error('Failed to pull latest app state:', err);
    }
  }, [applyRemoteState]);

  // Load persisted app state from backend on startup
  useEffect(() => {
    let cancelled = false;

    const hydrateState = async () => {
      try {
        const res = await fetch('/api/state');
        if (!res.ok) throw new Error(`State fetch failed: ${res.status}`);

        const payload = await res.json();
        const state = payload?.state;
        lastServerUpdatedAtRef.current = payload?.updatedAt || null;
        if (!state || typeof state !== 'object') {
          return;
        }
        applyRemoteState(state);
      } catch (err) {
        console.error('Failed to hydrate app state:', err);
      } finally {
        if (!cancelled) setIsHydrated(true);
      }
    };

    hydrateState();

    return () => {
      cancelled = true;
      if (saveTimerRef.current) {
        clearTimeout(saveTimerRef.current);
      }
    };
  }, [applyRemoteState]);

  // Pull updates from server so multiple logged-in users stay in sync.
  useEffect(() => {
    if (!isHydrated) return;

    const poll = async () => {
      // Skip pull while a local save is queued.
      if (saveTimerRef.current) return;

      pullLatestState();
    };

    const interval = setInterval(poll, 3000);
    return () => clearInterval(interval);
  }, [isHydrated, pullLatestState]);

  // Real-time cross-user sync via server-sent events.
  useEffect(() => {
    if (!isHydrated) return;

    const events = new EventSource('/api/events');

    const onStateUpdated = () => {
      // Avoid pulling while a local save is queued.
      if (saveTimerRef.current) return;
      pullLatestState();
    };

    events.addEventListener('state_updated', onStateUpdated);

    events.onerror = () => {
      // Polling remains active as fallback if SSE reconnects slowly.
    };

    return () => {
      events.removeEventListener('state_updated', onStateUpdated);
      events.close();
    };
  }, [isHydrated, pullLatestState]);

  // Persist app state to backend whenever core data changes
  useEffect(() => {
    if (!isHydrated) return;

    if (suppressNextSaveRef.current) {
      suppressNextSaveRef.current = false;
      return;
    }

    if (saveTimerRef.current) {
      clearTimeout(saveTimerRef.current);
    }

    saveTimerRef.current = setTimeout(async () => {
      const state = {
        users,
        leads,
        ideas,
        tasks,
        projects,
        followups,
        callNotes,
        messages,
        posts,
        n8nFlows,
        notionPages,
        content,
        depts,
        sessions,
        aicChecklist,
        weeklyGoals,
        strategyItems,
        log,
        leadScores
      };

      try {
        const res = await fetch('/api/state', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ state })
        });

        if (res.ok) {
          const payload = await res.json();
          lastServerUpdatedAtRef.current = payload?.updatedAt || lastServerUpdatedAtRef.current;
        }
      } catch (err) {
        console.error('Failed to persist app state:', err);
      }
    }, 800);

    return () => {
      if (saveTimerRef.current) {
        clearTimeout(saveTimerRef.current);
      }
    };
  }, [
    isHydrated,
    users,
    leads,
    ideas,
    tasks,
    projects,
    followups,
    callNotes,
    messages,
    posts,
    n8nFlows,
    notionPages,
    content,
    depts,
    sessions,
    aicChecklist,
    weeklyGoals,
    strategyItems,
    log,
    leadScores
  ]);

  // ═══════════════════════════════════════════════════════════════════════════
  // LOGGING
  // ═══════════════════════════════════════════════════════════════════════════
  const addLog = useCallback((username, action, detail) => {
    setLog(prev => {
      const newLog = [{ user: username, action, detail, time: new Date().toISOString() }, ...prev];
      return newLog.slice(0, 300);
    });
  }, []);

  const fetchSystemDiagnostics = useCallback(async () => {
    setSystemDiagLoading(true);
    setSystemDiagError('');
    try {
      const res = await fetch('/api/diagnostics');
      if (!res.ok) throw new Error(`Diagnostics fetch failed: ${res.status}`);
      const payload = await res.json();
      setSystemDiag(payload);
    } catch (err) {
      setSystemDiagError(err.message || 'Failed to load diagnostics');
    } finally {
      setSystemDiagLoading(false);
    }
  }, []);

  // ═══════════════════════════════════════════════════════════════════════════
  // QUOTE ROTATION
  // ═══════════════════════════════════════════════════════════════════════════
  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex(i => (i + 1) % QUOTES.length);
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  // Keep sidebar behavior responsive across desktop/mobile widths
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      setSidebarOpen(!mobile);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ═══════════════════════════════════════════════════════════════════════════
  // AUTH FUNCTIONS
  // ═══════════════════════════════════════════════════════════════════════════
  const doLogin = useCallback(async () => {
    setLoginError('');
    const username = loginUser.toLowerCase().trim();
    const userData = users[username];

    if (!userData) {
      setLoginError('User not found');
      return;
    }

    if (!userData.active) {
      setLoginError('Account deactivated. Contact admin.');
      return;
    }

    const isValidPassword = await _chk(userData.pass, loginPass);
    if (!isValidPassword) {
      setLoginError('Incorrect password');
      return;
    }

    // Login success
    const now = new Date().toISOString();
    const migratedHash = _isHashedPassword(userData.pass) ? userData.pass : await _hashPassword(loginPass);
    setUsers(prev => ({
      ...prev,
      [username]: {
        ...prev[username],
        pass: migratedHash,
        status: 'online',
        loginTime: now,
        totalLogins: (prev[username].totalLogins || 0) + 1,
        sessions: [...(prev[username].sessions || []), { login: now, logout: null }]
      }
    }));

    setUser(username);
    setSessionTime(0);
    addLog(username, 'login', `Logged in`);
    toast(`Welcome back, ${userData.name.split(' ')[0]}! ☀️`, 'success');
    setLoginUser('');
    setLoginPass('');
  }, [loginUser, loginPass, users, addLog, toast]);

  const doLogout = useCallback(() => {
    if (!user) return;
    
    const now = new Date().toISOString();
    setUsers(prev => ({
      ...prev,
      [user]: {
        ...prev[user],
        status: 'offline',
        lastSeen: now,
        sessions: prev[user].sessions.map((s, i, arr) => 
          i === arr.length - 1 ? { ...s, logout: now } : s
        )
      }
    }));

    addLog(user, 'logout', `Logged out (Session: ${formatDuration(sessionTime * 1000)})`);
    if (sessionInterval) clearInterval(sessionInterval);
    setUser(null);
    setPage('home');
    if (typeof window !== 'undefined') {
      localStorage.removeItem(ACTIVE_USER_KEY);
      localStorage.removeItem(ACTIVE_PAGE_KEY);
    }
    setSessionTime(0);
    toast('Logged out successfully', 'info');
  }, [user, sessionTime, sessionInterval, addLog, toast]);

  // Session Timer
  useEffect(() => {
    if (user) {
      const interval = setInterval(() => {
        setSessionTime(t => t + 1);
      }, 1000);
      setSessionIntervalId(interval);
      return () => clearInterval(interval);
    }
  }, [user]);

  // ═══════════════════════════════════════════════════════════════════════════
  // ROLE CHECKS
  // ═══════════════════════════════════════════════════════════════════════════
  const isCEO = user && (users[user]?.role === 'owner' || users[user]?.role === 'admin');
  const isMentor = user && users[user]?.isMentor;
  const canAccess = useCallback((pageName) => {
    if (!user) return false;
    const role = users[user]?.role;
    const mentor = users[user]?.isMentor;
    
    const ceoOnlyPages = ['admin', 'people', 'departments', 'ceo-board', 'pulse'];
    
    if (mentor) {
      return ['home', 'strategy', 'mentors'].includes(pageName);
    }
    
    if (ceoOnlyPages.includes(pageName)) {
      return role === 'owner' || role === 'admin';
    }
    
    return true;
  }, [user, users]);

  // Persist session identity so refresh keeps user logged in.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (user) {
      localStorage.setItem(ACTIVE_USER_KEY, user);
    } else {
      localStorage.removeItem(ACTIVE_USER_KEY);
    }
  }, [user]);

  // Persist last page for logged-in user and recover on refresh.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (user) {
      localStorage.setItem(ACTIVE_PAGE_KEY, page);
    }
  }, [user, page]);

  // Validate restored session and page after hydration/user updates.
  useEffect(() => {
    if (!user) return;

    const restoredUser = users[user];
    if (!restoredUser || restoredUser.active === false) {
      setUser(null);
      setPage('home');
      if (typeof window !== 'undefined') {
        localStorage.removeItem(ACTIVE_USER_KEY);
        localStorage.removeItem(ACTIVE_PAGE_KEY);
      }
      return;
    }

    if (!canAccess(page)) {
      setPage('home');
    }
  }, [user, users, page, canAccess]);

  useEffect(() => {
    if (!isCEO) return;
    if (adminTab !== 'system') return;
    fetchSystemDiagnostics();
  }, [isCEO, adminTab, fetchSystemDiagnostics]);

  // ═══════════════════════════════════════════════════════════════════════════
  // MODAL HELPERS
  // ═══════════════════════════════════════════════════════════════════════════
  const om = useCallback((name, data = null) => {
    setModal(name);
    setModalData(data);
    
    // Initialize form data based on modal type
    if (name === 'm-lead') {
      setLeadForm(data || { name: '', area: '', size: '3kW', temp: 'warm', stage: 'new', val: '', notes: '' });
    } else if (name === 'm-followup') {
      setFollowupForm({ lid: data?.lid || '', date: '', type: 'call', note: '' });
    } else if (name === 'm-callnote') {
      setCallNoteForm({ lid: data?.lid || '', outcome: 'neutral', nextDate: '', notes: '' });
    } else if (name === 'm-task') {
      setTaskForm(data ? { name: data.name, ow: data.ow, dept: data.dept, pri: data.pri, due: data.due, idea: data.idea || '' } 
                       : { name: '', ow: '', dept: '', pri: 'med', due: '', idea: '' });
    } else if (name === 'm-project') {
      setProjectForm(data ? { name: data.name, cat: data.cat, st: data.st, prog: data.prog, own: data.own, pri: data.pri, due: data.due, desc: data.desc, impact: data.impact, block: data.block || '' }
                          : { name: '', cat: '', st: 'planning', prog: 0, own: '', pri: 'med', due: '', desc: '', impact: '', block: '' });
    } else if (name === 'm-user') {
      setUserForm(data ? { username: data.id, name: data.name, role: data.role, dept: data.dept, phone: data.phone || '', bio: data.bio || '', pass: '' }
                       : { username: '', name: '', role: 'member', dept: '', phone: '', bio: '', pass: '' });
    } else if (name === 'm-dept') {
      setDeptForm(data ? { name: data.name, desc: data.desc, head: data.head, emoji: data.emoji }
                       : { name: '', desc: '', head: '', emoji: '📁' });
    } else if (name === 'm-automation') {
      setAutoForm(data ? { name: data.name, trigger: data.trigger, action: data.action, webhook: data.webhook || '', st: data.st }
                       : { name: '', trigger: '', action: '', webhook: '', st: 'planned' });
    }
  }, []);

  const cm = useCallback(() => {
    setModal(null);
    setModalData(null);
  }, []);

  // Close modal on ESC
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape' && modal) cm();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [modal, cm]);

  // ═══════════════════════════════════════════════════════════════════════════
  // NAVIGATION
  // ═══════════════════════════════════════════════════════════════════════════
  const goTo = useCallback((pg) => {
    if (canAccess(pg)) {
      setPage(pg);
      setFilterTab('all');
      setSearchTerm('');
      if (isMobile) setSidebarOpen(false);
    } else {
      toast('Access denied', 'error');
    }
  }, [canAccess, isMobile, toast]);

  // ═══════════════════════════════════════════════════════════════════════════
  // AI FUNCTIONS
  // ═══════════════════════════════════════════════════════════════════════════
  const callClaude = async (prompt) => {
    if (!apiKey) {
      toast('Please set Claude API key in settings', 'error');
      return null;
    }

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true'
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-5-20250514',
          max_tokens: 1000,
          messages: [{ role: 'user', content: prompt }]
        })
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      return data.content[0].text;
    } catch (err) {
      console.error('Claude API Error:', err);
      toast(`AI Error: ${err.message}`, 'error');
      return null;
    }
  };

  const analyzeIdea = async (idea) => {
    setAiLoading(true);
    const prompt = `You are an AI advisor for Surya Setu Energy Solutions, a solar advisory startup in Pune, India (AIC-MIT ADT incubated). 

Analyze this idea and return ONLY valid JSON (no markdown, no explanation):

Title: ${idea.title}
Category: ${idea.cat}
Description: ${idea.desc}

Return JSON format:
{
  "score": <number 1-100>,
  "summary": "<one line summary>",
  "tasks": ["<task 1>", "<task 2>", "<task 3>"],
  "pros": ["<pro 1>", "<pro 2>"],
  "cons": ["<con 1>", "<con 2>"],
  "verdict": "<Recommended | Consider | Not Recommended>",
  "nextStep": "<immediate next action>"
}`;

    const result = await callClaude(prompt);
    setAiLoading(false);

    if (result) {
      try {
        const parsed = JSON.parse(result);
        setIdeas(prev => prev.map(i => 
          i.id === idea.id ? { ...i, ai: result, aiParsed: parsed } : i
        ));
        addLog(user, 'ai_analyze', `AI analyzed idea: ${idea.title}`);
        toast('AI analysis complete!', 'success');
        return parsed;
      } catch (e) {
        toast('Failed to parse AI response', 'error');
      }
    }
    return null;
  };

  const aiScoreLeads = async () => {
    setAiLoading(true);
    const leadsData = leads.map(l => ({
      id: l.id,
      name: l.name,
      area: l.area,
      size: l.size,
      temp: l.temp,
      stage: l.stage,
      notes: l.notes
    }));

    const prompt = `You are a sales AI for Surya Setu Energy Solutions, a solar company in Pune, India.

Score these solar leads (1-100) and suggest actions. Return ONLY valid JSON array:

${JSON.stringify(leadsData, null, 2)}

Return format:
[
  {"id": "<lead_id>", "score": <number>, "action": "<recommended action>", "priority": "<high|med|low>"}
]`;

    const result = await callClaude(prompt);
    setAiLoading(false);

    if (result) {
      try {
        const parsed = JSON.parse(result);
        const scores = {};
        parsed.forEach(s => { scores[s.id] = s; });
        setLeadScores(scores);
        addLog(user, 'ai_score', `AI scored ${leads.length} leads`);
        toast('Leads scored by AI!', 'success');
        return scores;
      } catch (e) {
        toast('Failed to parse AI response', 'error');
      }
    }
    return null;
  };

  const aiAssignTasks = async () => {
    setAiLoading(true);
    const pendingIdeas = ideas.filter(i => i.st === 'approved' && i.tasks.length === 0);
    
    if (pendingIdeas.length === 0) {
      toast('No approved ideas without tasks', 'warning');
      setAiLoading(false);
      return;
    }

    const prompt = `You are a task manager for Surya Setu Energy Solutions, a solar startup in Pune.

Team structure:
- Sales: riya (Sales Head)
- Marketing: aman (Marketing Lead)
- Operations: priya (Operations Manager)
- CEO: onkar (Founder)

Create tasks for these approved ideas. Return ONLY valid JSON array:

${pendingIdeas.map(i => `- ${i.title}: ${i.desc}`).join('\n')}

Return format:
[
  {"idea": "<idea title>", "dept": "<dept name>", "owner": "<username>", "task": "<task description>", "priority": "<high|med|low>"}
]`;

    const result = await callClaude(prompt);
    setAiLoading(false);

    if (result) {
      try {
        const parsed = JSON.parse(result);
        const newTasks = parsed.map(t => ({
          id: genId(),
          name: t.task,
          ow: t.owner,
          dept: t.dept,
          pri: t.priority,
          due: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          done: false,
          idea: t.idea
        }));
        setTasks(prev => [...prev, ...newTasks]);
        addLog(user, 'ai_tasks', `AI created ${newTasks.length} tasks`);
        toast(`Created ${newTasks.length} tasks from AI!`, 'success');
      } catch (e) {
        toast('Failed to parse AI response', 'error');
      }
    }
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // CRUD FUNCTIONS
  // ═══════════════════════════════════════════════════════════════════════════
  
  // Tasks
  const toggleTask = (id) => {
    setTasks(prev => prev.map(t => {
      if (t.id === id) {
        const newDone = !t.done;
        if (newDone) addLog(user, 'task_done', `Completed: ${t.name}`);
        return { ...t, done: newDone };
      }
      return t;
    }));
  };

  const deleteTask = (id) => {
    const task = tasks.find(t => t.id === id);
    if (task) {
      setTasks(prev => prev.filter(t => t.id !== id));
      addLog(user, 'task_delete', `Deleted task: ${task.name}`);
      toast('Task deleted', 'info');
    }
  };

  // Ideas
  const submitIdea = (title, cat, desc) => {
    const newIdea = {
      id: genId(),
      user,
      cat,
      title,
      desc,
      st: 'pending',
      ai: null,
      aiParsed: null,
      cc: null,
      tasks: [],
      created: new Date().toISOString()
    };
    setIdeas(prev => [newIdea, ...prev]);
    addLog(user, 'idea_submit', `Submitted: ${title}`);
    toast('Idea submitted!', 'success');
    return newIdea;
  };

  const approveIdea = (id, status, comment) => {
    setIdeas(prev => prev.map(i => {
      if (i.id === id) {
        addLog(user, `idea_${status}`, `${status}: ${i.title}`);
        return { ...i, st: status, cc: comment || i.cc };
      }
      return i;
    }));
    toast(`Idea ${status}!`, status === 'rejected' ? 'warning' : 'success');
  };

  // Leads
  const updateLead = (id, updates) => {
    setLeads(prev => prev.map(l => l.id === id ? { ...l, ...updates } : l));
    toast('Lead updated', 'success');
  };

  const addLead = (leadData) => {
    const newLead = { id: genId(), ...leadData };
    setLeads(prev => [...prev, newLead]);
    addLog(user, 'lead_add', `Added lead: ${leadData.name}`);
    toast('Lead added!', 'success');
    return newLead;
  };

  // Follow-ups
  const markFollowupDone = (id) => {
    setFollowups(prev => prev.map(f => {
      if (f.id === id) {
        addLog(user, 'followup_done', `Completed follow-up for lead`);
        return { ...f, done: true };
      }
      return f;
    }));
    toast('Follow-up marked done!', 'success');
  };

  const addFollowup = (followupData) => {
    const newFollowup = { id: genId(), created: new Date().toISOString(), ...followupData };
    setFollowups(prev => [...prev, newFollowup]);
    addLog(user, 'followup_set', `Set follow-up for ${followupData.date}`);
    toast('Follow-up scheduled!', 'success');
    return newFollowup;
  };

  // Projects
  const updateProject = (id, updates) => {
    setProjects(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
  };

  // Messages
  const sendMessage = (toUser, text) => {
    const key = [user, toUser].sort().join(':');
    const msg = { from: user, text, time: new Date().toISOString(), read: false };
    setMessages(prev => ({
      ...prev,
      [key]: [...(prev[key] || []), msg]
    }));
    addLog(user, 'msg_sent', `Message to ${toUser}`);
  };

  // Export Data
  const exportData = () => {
    const data = {
      users, tasks, projects, ideas, leads, content, messages, posts, depts, log,
      followups, callNotes, n8nFlows, notionPages, sessions, aicChecklist
    };
    const encoded = 'SURYAOS_E2E_V5:' + btoa(encodeURIComponent(JSON.stringify(data)));
    const blob = new Blob([encoded], { type: 'application/octet-stream' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `suryaos_backup_${new Date().toISOString().split('T')[0]}.sos`;
    a.click();
    URL.revokeObjectURL(url);
    addLog(user, 'backup', 'Exported system backup');
    toast('Backup exported!', 'success');
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // RENDER: LOGIN SCREEN
  // ═══════════════════════════════════════════════════════════════════════════
  if (!user) {
    return (
      <div className="login-screen">
        <div className="login-card">
          <div className="login-logo">
            <div className="login-logo-icon">
              <Sun size={28} color="#fff" />
            </div>
            <span className="login-logo-text">Surya OS</span>
          </div>
          
          <p style={{ color: 'var(--tx2)', textAlign: 'center', marginBottom: 32, fontSize: 14 }}>
            Internal Team Intelligence Platform
          </p>

          <div style={{ marginBottom: 20 }}>
            <label style={{ display: 'block', marginBottom: 8, color: 'var(--tx2)', fontSize: 13 }}>
              Username
            </label>
            <input
              className="input"
              type="text"
              placeholder="Enter username"
              value={loginUser}
              onChange={(e) => setLoginUser(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && doLogin()}
            />
          </div>

          <div style={{ marginBottom: 24 }}>
            <label style={{ display: 'block', marginBottom: 8, color: 'var(--tx2)', fontSize: 13 }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <input
                className="input"
                type={showPass ? 'text' : 'password'}
                placeholder="Enter password"
                value={loginPass}
                onChange={(e) => setLoginPass(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && doLogin()}
                style={{ paddingRight: 44 }}
              />
              <button
                onClick={() => setShowPass(!showPass)}
                style={{
                  position: 'absolute',
                  right: 12,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: 'var(--tx3)',
                  cursor: 'pointer',
                  padding: 0
                }}
              >
                {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {loginError && (
            <div style={{
              background: 'rgba(239,68,68,0.1)',
              border: '1px solid rgba(239,68,68,0.2)',
              borderRadius: 8,
              padding: '12px 16px',
              marginBottom: 20,
              color: 'var(--red)',
              fontSize: 13,
              display: 'flex',
              alignItems: 'center',
              gap: 8
            }}>
              <AlertCircle size={16} />
              {loginError}
            </div>
          )}

          <button className="btn btn-primary" onClick={doLogin} style={{ width: '100%', padding: '14px' }}>
            <Sun size={18} />
            Login to Surya OS
          </button>

          <div style={{ marginTop: 32, padding: 16, background: 'var(--bg2)', borderRadius: 10 }}>
            <p style={{ color: 'var(--tx3)', fontSize: 11, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>
              Demo Credentials
            </p>
            <div style={{ display: 'grid', gap: 6, fontSize: 12, color: 'var(--tx2)' }}>
              <div><strong style={{ color: 'var(--sun)' }}>onkar</strong> — CEO (full access)</div>
              <div><strong style={{ color: 'var(--green)' }}>riya</strong> — Sales Head</div>
              <div><strong style={{ color: 'var(--pink)' }}>aman</strong> — Marketing</div>
              <div><strong style={{ color: 'var(--blue)' }}>priya</strong> — Operations</div>
              <div><strong style={{ color: 'var(--purple)' }}>dr.desai</strong> — Mentor</div>
              <div style={{ marginTop: 4, color: 'var(--tx3)' }}>Password: <code style={{ color: 'var(--sun)' }}>solar123</code></div>
            </div>
          </div>

          <p style={{ textAlign: 'center', marginTop: 24, color: 'var(--tx3)', fontSize: 11 }}>
            SuryaSetu Energy Solutions © 2026 — AIC-MIT ADT Incubated
          </p>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // CURRENT USER DATA
  // ═══════════════════════════════════════════════════════════════════════════
  const currentUser = users[user];

  // ═══════════════════════════════════════════════════════════════════════════
  // SIDEBAR NAV ITEMS
  // ═══════════════════════════════════════════════════════════════════════════
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'ideas', icon: Lightbulb, label: 'Idea Feed', badge: badges.ideas },
    { id: 'pipeline', icon: GitBranch, label: 'Idea Pipeline' },
    ...(isCEO ? [{ id: 'ceo-board', icon: Crown, label: 'CEO Review', badge: badges.ideas }] : []),
    { id: 'projects', icon: FolderKanban, label: 'Projects', badge: badges.projects },
    { id: 'tasks', icon: CheckSquare, label: 'Tasks', badge: badges.tasks },
    { id: 'crm', icon: Users, label: 'CRM Pipeline' },
    { id: 'followups', icon: Phone, label: 'Follow-ups', badge: badges.followups },
    { id: 'marketing', icon: Target, label: 'Marketing Studio' },
    ...(isCEO ? [{ id: 'pulse', icon: Activity, label: 'Team Pulse' }] : []),
    { id: 'messages', icon: MessageSquare, label: 'Messages', badge: badges.messages },
    { id: 'mentors', icon: Brain, label: 'Mentor Network' },
    { id: 'automations', icon: Zap, label: 'Automations' },
    { id: 'innovation', icon: Rocket, label: 'Innovation Hub' },
    { id: 'strategy', icon: Target, label: 'Strategy Room' },
    { id: 'analytics', icon: BarChart3, label: 'Analytics' },
    { id: 'aic', icon: Trophy, label: 'AIC Demo' },
    { id: 'profile', icon: User, label: 'Profile' },
    ...(isCEO ? [
      { id: 'admin', icon: Shield, label: 'Admin' },
      { id: 'people', icon: UserCog, label: 'People' },
      { id: 'departments', icon: Building2, label: 'Departments' }
    ] : [])
  ].filter(item => canAccess(item.id) || item.id === page);

  // ═══════════════════════════════════════════════════════════════════════════
  // RENDER: HOME PAGE
  // ═══════════════════════════════════════════════════════════════════════════
  const renderHome = () => {
    const aicDate = new Date('2026-03-20');
    const today = new Date();
    const daysToAIC = Math.ceil((aicDate - today) / (1000 * 60 * 60 * 24));
    
    // Calculate metrics
    const hotLeads = leads.filter(l => l.temp === 'hot').length;
    const pendingIdeasCount = ideas.filter(i => i.st === 'pending').length;
    const activeProjects = projects.filter(p => p.st === 'active').length;
    const onlineTeam = Object.values(users).filter(u => u.status === 'online').length;
    
    // Idea pipeline counts
    const ideaCounts = {
      pending: ideas.filter(i => i.st === 'pending').length,
      approved: ideas.filter(i => i.st === 'approved').length,
      building: ideas.filter(i => i.st === 'building').length,
      launched: ideas.filter(i => i.st === 'launched').length
    };

    const pipelineValue = leads.reduce((acc, l) => acc + (l.val || 0), 0);
    const revenueTarget = 500000; // 5L monthly target
    const revProgress = Math.min(100, (10000 / revenueTarget) * 100); // ₹10K current
    const pipelineProgress = Math.min(100, (pipelineValue / 1000000) * 100); // 10L pipeline target
    const ideasProgress = Math.min(100, (ideas.length / 20) * 100); // 20 ideas target

    // My pending tasks
    const myTasks = tasks.filter(t => t.ow === user && !t.done).slice(0, 5);

    // Recent activity
    const recentLog = log.slice(0, 8);

    // Growth Score (weighted average)
    const growthScore = Math.round(
      (revProgress * 0.4) + (pipelineProgress * 0.3) + (ideasProgress * 0.3)
    );
    const circumference = 2 * Math.PI * 45;
    const strokeDashoffset = circumference - (growthScore / 100) * circumference;

    return (
      <div>
        {/* Header with AIC Countdown */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-start',
          marginBottom: 24 
        }}>
          <div>
            <h1 style={{ fontSize: 28, marginBottom: 4 }}>
              Good {new Date().getHours() < 12 ? 'Morning' : new Date().getHours() < 17 ? 'Afternoon' : 'Evening'}, {currentUser.name.split(' ')[0]}! ☀️
            </h1>
            <p style={{ color: 'var(--tx2)', fontSize: 14 }}>
              {new Date().toLocaleDateString('en-IN', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
          
          <div className="card" style={{ 
            padding: '16px 24px', 
            display: 'flex', 
            alignItems: 'center', 
            gap: 16,
            background: 'linear-gradient(135deg, rgba(255,140,0,0.1), rgba(139,92,246,0.1))'
          }}>
            <Trophy size={24} color="var(--sun)" />
            <div>
              <div style={{ color: 'var(--tx2)', fontSize: 12, marginBottom: 2 }}>AIC Demo Day</div>
              <div style={{ fontFamily: 'Syne', fontSize: 24, fontWeight: 700 }}>
                {daysToAIC > 0 ? `${daysToAIC} days` : daysToAIC === 0 ? 'TODAY!' : 'Completed'}
              </div>
            </div>
          </div>
        </div>

        {/* Growth Ring + Goals */}
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 24, marginBottom: 24 }}>
          {/* Growth Score Ring */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 24 }}>
            <svg className="growth-ring" width="120" height="120" viewBox="0 0 100 100">
              <circle className="bg-ring" cx="50" cy="50" r="45" strokeWidth="8" />
              <circle 
                className="progress-ring" 
                cx="50" cy="50" r="45" 
                strokeWidth="8"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
              />
            </svg>
            <div style={{ 
              position: 'relative', 
              marginTop: -80, 
              textAlign: 'center',
              marginBottom: 40
            }}>
              <div style={{ fontFamily: 'Syne', fontSize: 32, fontWeight: 800 }}>{growthScore}</div>
              <div style={{ color: 'var(--tx3)', fontSize: 11, textTransform: 'uppercase' }}>Growth Score</div>
            </div>
          </div>

          {/* Goal Progress Bars */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <h3 style={{ fontSize: 14, color: 'var(--tx2)', marginBottom: 4 }}>Monthly Goals</h3>
            
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 13 }}>
                <span>Revenue</span>
                <span style={{ color: 'var(--green)' }}>₹10K / ₹5L (2%)</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${revProgress}%`, background: 'var(--green)' }} />
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 13 }}>
                <span>Pipeline Value</span>
                <span style={{ color: 'var(--blue)' }}>{fv(pipelineValue)} / ₹10L ({Math.round(pipelineProgress)}%)</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${pipelineProgress}%`, background: 'var(--blue)' }} />
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 13 }}>
                <span>Ideas Generated</span>
                <span style={{ color: 'var(--purple)' }}>{ideas.length} / 20 ({Math.round(ideasProgress)}%)</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${ideasProgress}%`, background: 'var(--purple)' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Stat Cards */}
        <div className="stat-grid">
          <div className="stat-card">
            <div className="stat-card-icon" style={{ background: 'rgba(239,68,68,0.15)' }}>
              <Flame size={20} color="var(--red)" />
            </div>
            <div className="stat-card-value">{hotLeads}</div>
            <div className="stat-card-label">Hot Leads</div>
          </div>
          <div className="stat-card">
            <div className="stat-card-icon" style={{ background: 'rgba(245,158,11,0.15)' }}>
              <Lightbulb size={20} color="var(--amber)" />
            </div>
            <div className="stat-card-value">{pendingIdeasCount}</div>
            <div className="stat-card-label">Pending Ideas</div>
          </div>
          <div className="stat-card">
            <div className="stat-card-icon" style={{ background: 'rgba(59,130,246,0.15)' }}>
              <FolderKanban size={20} color="var(--blue)" />
            </div>
            <div className="stat-card-value">{activeProjects}</div>
            <div className="stat-card-label">Active Projects</div>
          </div>
          <div className="stat-card">
            <div className="stat-card-icon" style={{ background: 'rgba(0,214,143,0.15)' }}>
              <Users size={20} color="var(--green)" />
            </div>
            <div className="stat-card-value">{onlineTeam}</div>
            <div className="stat-card-label">Online Team</div>
          </div>
        </div>

        {/* Idea Pipeline Mini */}
        <div className="card" style={{ marginBottom: 24 }}>
          <h3 style={{ fontSize: 14, color: 'var(--tx2)', marginBottom: 16 }}>Idea Pipeline</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
            {Object.entries(ideaCounts).map(([stage, count]) => (
              <div 
                key={stage}
                onClick={() => { setFilterTab(stage); goTo('ideas'); }}
                style={{ 
                  background: 'var(--bg2)', 
                  borderRadius: 10, 
                  padding: 16, 
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  border: '1px solid var(--border)'
                }}
              >
                <div style={{ fontFamily: 'Syne', fontSize: 28, fontWeight: 700, color: 'var(--tx)' }}>
                  {count}
                </div>
                <div style={{ fontSize: 11, color: 'var(--tx3)', textTransform: 'uppercase' }}>
                  {stage}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Two Column Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {/* My Tasks */}
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <h3 style={{ fontSize: 14, color: 'var(--tx2)' }}>My Tasks</h3>
              <button className="btn btn-ghost btn-sm" onClick={() => goTo('tasks')}>
                View All <ChevronRight size={14} />
              </button>
            </div>
            
            {myTasks.length === 0 ? (
              <div className="empty-state" style={{ padding: 40 }}>
                <CheckSquare />
                <h3>All caught up!</h3>
                <p>No pending tasks</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {myTasks.map(task => (
                  <div 
                    key={task.id}
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 12,
                      padding: 12,
                      background: 'var(--bg2)',
                      borderRadius: 8
                    }}
                  >
                    <div 
                      className="checkbox"
                      onClick={() => toggleTask(task.id)}
                    />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 13, color: 'var(--tx)' }}>{task.name}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
                        <div 
                          className="dot" 
                          style={{ 
                            width: 6, 
                            height: 6,
                            background: task.pri === 'high' ? 'var(--red)' : task.pri === 'med' ? 'var(--amber)' : 'var(--blue)'
                          }} 
                        />
                        <span style={{ fontSize: 11, color: isOD(task.due) ? 'var(--red)' : 'var(--tx3)' }}>
                          {fd2(task.due)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Team Status */}
          <div className="card">
            <h3 style={{ fontSize: 14, color: 'var(--tx2)', marginBottom: 16 }}>Team Status</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {Object.entries(users).filter(([_, u]) => u.active).map(([username, u]) => (
                <div 
                  key={username}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 12,
                    padding: 10,
                    background: 'var(--bg2)',
                    borderRadius: 8
                  }}
                >
                  <div 
                    className={`avatar avatar-sm`}
                    style={{ background: u.col, color: '#fff' }}
                  >
                    {u.av}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, color: 'var(--tx)', display: 'flex', alignItems: 'center', gap: 8 }}>
                      {u.name}
                      <div className={`dot dot-${u.status}`} />
                    </div>
                    <div style={{ fontSize: 11, color: 'var(--tx3)' }}>{u.dept}</div>
                  </div>
                  {isCEO && username !== user && (
                    <button 
                      className="btn btn-ghost btn-icon btn-xs"
                      onClick={() => { setActiveChat(username); goTo('messages'); }}
                    >
                      <MessageSquare size={14} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="card" style={{ marginTop: 24 }}>
          <h3 style={{ fontSize: 14, color: 'var(--tx2)', marginBottom: 16 }}>Recent Activity</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {recentLog.map((entry, idx) => {
              const entryUser = users[entry.user];
              return (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <div 
                    className="avatar avatar-sm"
                    style={{ background: entryUser?.col || 'var(--tx3)', color: '#fff' }}
                  >
                    {entryUser?.av || '?'}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, color: 'var(--tx)' }}>
                      <strong>{entryUser?.name || entry.user}</strong>
                      {' '}{entry.detail}
                    </div>
                    <div style={{ fontSize: 11, color: 'var(--tx3)', marginTop: 2 }}>
                      {ts(entry.time)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Motivational Quote */}
        <div 
          className="card" 
          style={{ 
            marginTop: 24, 
            background: 'linear-gradient(135deg, rgba(255,140,0,0.05), rgba(139,92,246,0.05))',
            textAlign: 'center',
            padding: 24
          }}
        >
          <p style={{ fontSize: 16, fontStyle: 'italic', color: 'var(--tx)', marginBottom: 8 }}>
            "{QUOTES[quoteIndex].text}"
          </p>
          <p style={{ fontSize: 12, color: 'var(--tx3)' }}>
            — {QUOTES[quoteIndex].author}
          </p>
        </div>
      </div>
    );
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // RENDER: CRM PIPELINE PAGE
  // ═══════════════════════════════════════════════════════════════════════════
  const renderCRM = () => {
    const stages = ['new', 'contacted', 'site', 'proposal', 'nego', 'won'];
    const stageLabels = {
      new: 'New Lead',
      contacted: 'Contacted',
      site: 'Site Visit',
      proposal: 'Proposal',
      nego: 'Negotiation',
      won: 'Won 🎉'
    };
    const stageColors = {
      new: 'var(--tx3)',
      contacted: 'var(--blue)',
      site: 'var(--purple)',
      proposal: 'var(--amber)',
      nego: 'var(--pink)',
      won: 'var(--green)'
    };
    const tempColors = { hot: 'var(--red)', warm: 'var(--amber)', cold: 'var(--blue)' };

    const pipelineValue = leads.reduce((acc, l) => acc + (l.val || 0), 0);
    const wonValue = leads.filter(l => l.stage === 'won').reduce((acc, l) => acc + (l.val || 0), 0);
    const hotLeads = leads.filter(l => l.temp === 'hot').length;

    const filteredLeads = leads.filter(l => {
      if (filterTemp !== 'all' && l.temp !== filterTemp) return false;
      if (searchTerm && !l.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
          !l.area.toLowerCase().includes(searchTerm.toLowerCase())) return false;
      return true;
    });

    const getLeadsByStage = (stage) => filteredLeads.filter(l => l.stage === stage);

    const moveLeadStage = (leadId, newStage) => {
      setLeads(prev => prev.map(l => l.id === leadId ? { ...l, stage: newStage } : l));
      toast(`Lead moved to ${stageLabels[newStage]}`, 'success');
    };

    return (
      <div>
        {/* Stats Row */}
        <div className="stat-grid">
          <div className="stat-card">
            <div className="stat-card-icon" style={{ background: 'rgba(59,130,246,0.15)' }}>
              <TrendingUp size={20} color="var(--blue)" />
            </div>
            <div className="stat-card-value">{fv(pipelineValue)}</div>
            <div className="stat-card-label">Pipeline Value</div>
          </div>
          <div className="stat-card">
            <div className="stat-card-icon" style={{ background: 'rgba(0,214,143,0.15)' }}>
              <Check size={20} color="var(--green)" />
            </div>
            <div className="stat-card-value">{fv(wonValue)}</div>
            <div className="stat-card-label">Won Deals</div>
          </div>
          <div className="stat-card">
            <div className="stat-card-icon" style={{ background: 'rgba(239,68,68,0.15)' }}>
              <Flame size={20} color="var(--red)" />
            </div>
            <div className="stat-card-value">{hotLeads}</div>
            <div className="stat-card-label">Hot Leads</div>
          </div>
          <div className="stat-card">
            <div className="stat-card-icon" style={{ background: 'rgba(255,140,0,0.15)' }}>
              <Users size={20} color="var(--sun)" />
            </div>
            <div className="stat-card-value">{leads.length}</div>
            <div className="stat-card-label">Total Leads</div>
          </div>
        </div>

        {/* Search & Filters */}
        <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--tx3)' }} />
            <input
              className="input"
              placeholder="Search leads by name or area..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ paddingLeft: 44 }}
            />
          </div>
          <select className="select" value={filterTemp} onChange={(e) => setFilterTemp(e.target.value)} style={{ width: 150 }}>
            <option value="all">All Temps</option>
            <option value="hot">🔥 Hot</option>
            <option value="warm">☀️ Warm</option>
            <option value="cold">❄️ Cold</option>
          </select>
          <button className="btn btn-primary" onClick={() => om('m-lead')}>
            <Plus size={18} /> Add Lead
          </button>
        </div>

        {/* Kanban Board */}
        <div className="kanban-board">
          {stages.map(stage => (
            <div key={stage} className="kanban-column">
              <div className="kanban-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: stageColors[stage] }} />
                  <span style={{ color: 'var(--tx)' }}>{stageLabels[stage]}</span>
                </div>
                <span style={{ 
                  background: 'var(--bg)', 
                  padding: '2px 8px', 
                  borderRadius: 10, 
                  fontSize: 12,
                  color: 'var(--tx2)'
                }}>
                  {getLeadsByStage(stage).length}
                </span>
              </div>
              <div className="kanban-cards">
                {getLeadsByStage(stage).map(lead => (
                  <div 
                    key={lead.id}
                    className="card"
                    style={{ padding: 14, cursor: 'pointer' }}
                    onClick={() => om('m-lead', lead)}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                      <div style={{ fontWeight: 600, color: 'var(--tx)', fontSize: 14 }}>{lead.name}</div>
                      <div style={{ 
                        padding: '2px 8px', 
                        borderRadius: 10, 
                        fontSize: 10, 
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        background: `${tempColors[lead.temp]}20`,
                        color: tempColors[lead.temp]
                      }}>
                        {lead.temp}
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6, fontSize: 12, color: 'var(--tx2)' }}>
                      <MapPin size={12} />
                      {lead.area}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8, fontSize: 12, color: 'var(--tx2)' }}>
                      <Sun size={12} />
                      {lead.size} system
                    </div>
                    <div style={{ 
                      fontFamily: 'Syne', 
                      fontSize: 18, 
                      fontWeight: 700, 
                      color: 'var(--green)',
                      marginBottom: 10
                    }}>
                      {fv(lead.val)}
                    </div>
                    {lead.notes && (
                      <div style={{ fontSize: 11, color: 'var(--tx3)', lineHeight: 1.5, marginBottom: 10 }}>
                        {lead.notes.slice(0, 60)}...
                      </div>
                    )}
                    {/* Stage Actions */}
                    {stage !== 'won' && (
                      <div style={{ display: 'flex', gap: 6 }}>
                        {stage !== stages[stages.length - 1] && (
                          <button 
                            className="btn btn-ghost btn-xs" 
                            style={{ flex: 1 }}
                            onClick={(e) => { e.stopPropagation(); moveLeadStage(lead.id, stages[stages.indexOf(stage) + 1]); }}
                          >
                            <ArrowRight size={12} /> Next
                          </button>
                        )}
                        <button 
                          className="btn btn-ghost btn-xs"
                          onClick={(e) => { e.stopPropagation(); om('m-followup', { lid: lead.id }); }}
                        >
                          <Phone size={12} />
                        </button>
                      </div>
                    )}
                    {stage === 'won' && (
                      <div className="badge badge-green" style={{ width: '100%', justifyContent: 'center' }}>
                        <Check size={12} /> Closed Won
                      </div>
                    )}
                  </div>
                ))}
                {getLeadsByStage(stage).length === 0 && (
                  <div style={{ textAlign: 'center', padding: 20, color: 'var(--tx3)', fontSize: 12 }}>
                    No leads in this stage
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // RENDER: FOLLOW-UP INTELLIGENCE PAGE
  // ═══════════════════════════════════════════════════════════════════════════
  const renderFollowups = () => {
    const overdueFollowups = followups.filter(f => !f.done && isOD(f.date));
    const todayFollowups = followups.filter(f => !f.done && isToday(f.date));
    const upcomingFollowups = followups.filter(f => !f.done && !isOD(f.date) && !isToday(f.date));
    const doneFollowups = followups.filter(f => f.done);

    const getLeadById = (lid) => leads.find(l => l.id === lid);
    const typeIcons = { call: Phone, whatsapp: MessageCircle, visit: MapPin, proposal: FileText, email: Mail };

    const getDaysOverdue = (dateStr) => {
      const today = new Date();
      const d = new Date(dateStr);
      return Math.floor((today - d) / (1000 * 60 * 60 * 24));
    };

    const copyWAScript = (lead) => {
      const template = WA_TEMPLATES[lead.temp] || WA_TEMPLATES.warm;
      const script = template(lead.name, lead.area);
      navigator.clipboard.writeText(script);
      toast('WhatsApp script copied!', 'success');
    };

    const openWhatsApp = (lead) => {
      const template = WA_TEMPLATES[lead.temp] || WA_TEMPLATES.warm;
      const script = template(lead.name, lead.area);
      const encoded = encodeURIComponent(script);
      window.open(`https://wa.me/?text=${encoded}`, '_blank');
    };

    const rescheduleFollowup = (id, daysToAdd) => {
      const newDate = new Date();
      newDate.setDate(newDate.getDate() + daysToAdd);
      setFollowups(prev => prev.map(f => 
        f.id === id ? { ...f, date: newDate.toISOString().split('T')[0] } : f
      ));
      toast(`Rescheduled to ${fd2(newDate.toISOString())}`, 'success');
    };

    const renderFollowupCard = (fu) => {
      const lead = getLeadById(fu.lid);
      if (!lead) return null;
      const Icon = typeIcons[fu.type] || Phone;
      const daysOver = getDaysOverdue(fu.date);

      return (
        <div key={fu.id} className="card" style={{ marginBottom: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ 
                width: 40, 
                height: 40, 
                borderRadius: 10, 
                background: fu.done ? 'rgba(0,214,143,0.15)' : isOD(fu.date) ? 'rgba(239,68,68,0.15)' : 'rgba(255,140,0,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Icon size={18} color={fu.done ? 'var(--green)' : isOD(fu.date) ? 'var(--red)' : 'var(--sun)'} />
              </div>
              <div>
                <div style={{ fontWeight: 600, color: 'var(--tx)', fontSize: 15 }}>{lead.name}</div>
                <div style={{ fontSize: 12, color: 'var(--tx2)' }}>{lead.area} • {lead.size} • {fv(lead.val)}</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              {!fu.done && isOD(fu.date) && (
                <div className="badge badge-red">
                  {daysOver} day{daysOver > 1 ? 's' : ''} overdue
                </div>
              )}
              {!fu.done && isToday(fu.date) && (
                <div className="badge badge-amber">Due Today</div>
              )}
              <div className={`badge badge-${lead.temp === 'hot' ? 'red' : lead.temp === 'warm' ? 'amber' : 'blue'}`}>
                {lead.temp}
              </div>
            </div>
          </div>

          <div style={{ fontSize: 13, color: 'var(--tx2)', marginBottom: 12 }}>
            <strong>Note:</strong> {fu.note}
          </div>

          {/* WhatsApp Script */}
          {!fu.done && (
            <div className="wa-script">
              <div className="wa-script-header">
                <MessageCircle size={14} /> WhatsApp Script ({lead.temp})
              </div>
              <div>{WA_TEMPLATES[lead.temp] ? WA_TEMPLATES[lead.temp](lead.name, lead.area) : WA_TEMPLATES.warm(lead.name)}</div>
            </div>
          )}

          {/* Actions */}
          {!fu.done && (
            <div style={{ display: 'flex', gap: 8, marginTop: 12, flexWrap: 'wrap' }}>
              <button className="btn btn-green btn-sm" onClick={() => { copyWAScript(lead); openWhatsApp(lead); }}>
                <Copy size={14} /> Copy & Open WA
              </button>
              <button className="btn btn-primary btn-sm" onClick={() => markFollowupDone(fu.id)}>
                <Check size={14} /> Mark Done
              </button>
              <button className="btn btn-ghost btn-sm" onClick={() => rescheduleFollowup(fu.id, 1)}>
                +1 Day
              </button>
              <button className="btn btn-ghost btn-sm" onClick={() => rescheduleFollowup(fu.id, 3)}>
                +3 Days
              </button>
              <button className="btn btn-ghost btn-sm" onClick={() => om('m-lead', lead)}>
                <Edit size={14} /> Edit Lead
              </button>
              <button className="btn btn-ghost btn-sm" onClick={() => om('m-callnote', { lid: lead.id })}>
                <FileText size={14} /> Log Note
              </button>
            </div>
          )}
        </div>
      );
    };

    const tabs = [
      { id: 'overdue', label: `Overdue (${overdueFollowups.length})`, color: 'var(--red)' },
      { id: 'today', label: `Today (${todayFollowups.length})`, color: 'var(--amber)' },
      { id: 'upcoming', label: `Upcoming (${upcomingFollowups.length})`, color: 'var(--blue)' },
      { id: 'ai', label: 'AI Scoring', color: 'var(--purple)' },
      { id: 'notes', label: 'Call Notes', color: 'var(--teal)' },
      { id: 'done', label: `Done (${doneFollowups.length})`, color: 'var(--green)' },
    ];

    return (
      <div>
        {/* Stats Row */}
        <div className="stat-grid">
          <div className="stat-card" style={{ borderLeft: '3px solid var(--red)' }}>
            <div className="stat-card-value" style={{ color: 'var(--red)' }}>{overdueFollowups.length}</div>
            <div className="stat-card-label">Overdue</div>
          </div>
          <div className="stat-card" style={{ borderLeft: '3px solid var(--amber)' }}>
            <div className="stat-card-value" style={{ color: 'var(--amber)' }}>{todayFollowups.length}</div>
            <div className="stat-card-label">Due Today</div>
          </div>
          <div className="stat-card" style={{ borderLeft: '3px solid var(--blue)' }}>
            <div className="stat-card-value" style={{ color: 'var(--blue)' }}>{upcomingFollowups.length}</div>
            <div className="stat-card-label">Upcoming</div>
          </div>
          <div className="stat-card" style={{ borderLeft: '3px solid var(--green)' }}>
            <div className="stat-card-value" style={{ color: 'var(--green)' }}>{doneFollowups.length}</div>
            <div className="stat-card-label">Completed</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="tabs">
          {tabs.map(tab => (
            <div
              key={tab.id}
              className={`tab ${filterTab === tab.id ? 'active' : ''}`}
              onClick={() => setFilterTab(tab.id)}
              style={filterTab === tab.id ? { background: tab.color } : {}}
            >
              {tab.label}
            </div>
          ))}
        </div>

        {/* Tab Content */}
        {filterTab === 'overdue' && (
          overdueFollowups.length === 0 ? (
            <div className="empty-state">
              <Check />
              <h3>No Overdue Follow-ups</h3>
              <p>Great job staying on top of things!</p>
            </div>
          ) : (
            overdueFollowups.sort((a, b) => new Date(a.date) - new Date(b.date)).map(renderFollowupCard)
          )
        )}

        {filterTab === 'today' && (
          todayFollowups.length === 0 ? (
            <div className="empty-state">
              <Calendar />
              <h3>No Follow-ups Today</h3>
              <p>Your schedule is clear for today</p>
            </div>
          ) : (
            todayFollowups.map(renderFollowupCard)
          )
        )}

        {filterTab === 'upcoming' && (
          upcomingFollowups.length === 0 ? (
            <div className="empty-state">
              <Calendar />
              <h3>No Upcoming Follow-ups</h3>
              <p>Schedule some follow-ups from the CRM</p>
            </div>
          ) : (
            upcomingFollowups.sort((a, b) => new Date(a.date) - new Date(b.date)).map(renderFollowupCard)
          )
        )}

        {filterTab === 'ai' && (
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <div>
                <h3 style={{ fontSize: 16, marginBottom: 4 }}>AI Lead Scoring</h3>
                <p style={{ fontSize: 13, color: 'var(--tx2)' }}>Let Claude analyze and prioritize your leads</p>
              </div>
              <button 
                className="btn btn-purple"
                onClick={aiScoreLeads}
                disabled={aiLoading}
              >
                {aiLoading ? <><span className="spinner" /> Analyzing...</> : <><Sparkles size={16} /> Run AI Score</>}
              </button>
            </div>

            {Object.keys(leadScores).length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {leads
                  .filter(l => leadScores[l.id])
                  .sort((a, b) => (leadScores[b.id]?.score || 0) - (leadScores[a.id]?.score || 0))
                  .map(lead => {
                    const score = leadScores[lead.id];
                    return (
                      <div key={lead.id} style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 16,
                        padding: 16,
                        background: 'var(--bg2)',
                        borderRadius: 10
                      }}>
                        <div style={{ 
                          width: 50, 
                          height: 50, 
                          borderRadius: '50%',
                          background: `conic-gradient(var(--purple) ${score.score}%, var(--bg) 0)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <div style={{ 
                            width: 40, 
                            height: 40, 
                            borderRadius: '50%', 
                            background: 'var(--bg2)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 700,
                            fontSize: 14
                          }}>
                            {score.score}
                          </div>
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontWeight: 600, marginBottom: 4 }}>{lead.name}</div>
                          <div style={{ fontSize: 12, color: 'var(--tx2)' }}>{lead.area} • {fv(lead.val)}</div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <div className={`badge badge-${score.priority === 'high' ? 'red' : score.priority === 'med' ? 'amber' : 'blue'}`}>
                            {score.priority} priority
                          </div>
                          <div style={{ fontSize: 12, color: 'var(--tx2)', marginTop: 6 }}>{score.action}</div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            ) : (
              <div className="empty-state" style={{ padding: 40 }}>
                <Brain />
                <h3>No AI Scores Yet</h3>
                <p>Click "Run AI Score" to analyze your leads</p>
              </div>
            )}
          </div>
        )}

        {filterTab === 'notes' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
              <h3 style={{ fontSize: 16 }}>Call Notes History</h3>
              <button className="btn btn-ghost btn-sm" onClick={() => om('m-callnote')}>
                <Plus size={14} /> Log Call
              </button>
            </div>
            {callNotes.length === 0 ? (
              <div className="empty-state">
                <FileText />
                <h3>No Call Notes Yet</h3>
                <p>Log your call outcomes to track conversations</p>
              </div>
            ) : (
              callNotes.sort((a, b) => new Date(b.time) - new Date(a.time)).map(note => {
                const lead = getLeadById(note.lid);
                return (
                  <div key={note.id} className="card" style={{ marginBottom: 12 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                      <strong>{lead?.name || 'Unknown Lead'}</strong>
                      <span style={{ fontSize: 12, color: 'var(--tx3)' }}>{ts(note.time)}</span>
                    </div>
                    <div className={`badge badge-${note.outcome === 'positive' ? 'green' : note.outcome === 'negative' ? 'red' : 'gray'}`} style={{ marginBottom: 8 }}>
                      {note.outcome}
                    </div>
                    <p style={{ fontSize: 13, color: 'var(--tx2)' }}>{note.notes}</p>
                    {note.nextDate && (
                      <div style={{ fontSize: 12, color: 'var(--tx3)', marginTop: 8 }}>
                        Next: {fd2(note.nextDate)}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        )}

        {filterTab === 'done' && (
          doneFollowups.length === 0 ? (
            <div className="empty-state">
              <Check />
              <h3>No Completed Follow-ups</h3>
              <p>Complete some follow-ups to see them here</p>
            </div>
          ) : (
            doneFollowups.map(renderFollowupCard)
          )
        )}
      </div>
    );
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // RENDER: IDEA FEED PAGE
  // ═══════════════════════════════════════════════════════════════════════════
  const renderIdeaFeed = () => {
    const cats = ['Marketing', 'Sales', 'Operations', 'Product', 'Tech', 'Content', 'Business'];
    const statusColors = {
      pending: 'amber',
      approved: 'green',
      building: 'blue',
      launched: 'purple',
      rejected: 'red'
    };

    const filteredIdeas = ideas.filter(i => {
      if (filterTab === 'mine') return i.user === user;
      if (filterTab !== 'all' && i.st !== filterTab) return false;
      return true;
    });

    const handleSubmitIdea = async () => {
      if (!ideaForm.title || !ideaForm.desc) {
        toast('Please fill all fields', 'warning');
        return;
      }
      const newIdea = submitIdea(ideaForm.title, ideaForm.cat, ideaForm.desc);
      setIdeaForm({ title: '', cat: 'Marketing', desc: '' });
      
      // Auto analyze
      if (apiKey) {
        await analyzeIdea(newIdea);
      }
    };

    return (
      <div>
        {/* Submit Idea Form */}
        <div className="card" style={{ marginBottom: 24 }}>
          <h3 style={{ fontSize: 16, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
            <Lightbulb size={20} color="var(--amber)" />
            Submit New Idea
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 200px', gap: 12, marginBottom: 12 }}>
            <input
              className="input"
              placeholder="Idea title..."
              value={ideaForm.title}
              onChange={(e) => setIdeaForm({ ...ideaForm, title: e.target.value })}
            />
            <select 
              className="select"
              value={ideaForm.cat}
              onChange={(e) => setIdeaForm({ ...ideaForm, cat: e.target.value })}
            >
              {cats.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <textarea
            className="textarea"
            placeholder="Describe your idea in detail..."
            value={ideaForm.desc}
            onChange={(e) => setIdeaForm({ ...ideaForm, desc: e.target.value })}
            style={{ marginBottom: 12 }}
          />
          <button 
            className="btn btn-purple"
            onClick={handleSubmitIdea}
            disabled={aiLoading}
          >
            {aiLoading ? <><span className="spinner" /> Analyzing...</> : <><Sparkles size={16} /> Submit & AI Analyze</>}
          </button>
        </div>

        {/* Tabs */}
        <div className="tabs">
          {['all', 'pending', 'approved', 'building', 'launched', 'mine'].map(tab => (
            <div
              key={tab}
              className={`tab ${filterTab === tab ? 'active' : ''}`}
              onClick={() => setFilterTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              {tab !== 'all' && tab !== 'mine' && (
                <span style={{ marginLeft: 6, opacity: 0.7 }}>
                  ({ideas.filter(i => i.st === tab).length})
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Ideas List */}
        {filteredIdeas.length === 0 ? (
          <div className="empty-state">
            <Lightbulb />
            <h3>No Ideas Found</h3>
            <p>Submit your first idea above!</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {filteredIdeas.sort((a, b) => new Date(b.created) - new Date(a.created)).map(idea => {
              const ideaUser = users[idea.user];
              return (
                <div key={idea.id} className="card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div 
                        className="avatar avatar-md"
                        style={{ background: ideaUser?.col || 'var(--tx3)', color: '#fff' }}
                      >
                        {ideaUser?.av || '?'}
                      </div>
                      <div>
                        <div style={{ fontWeight: 600, color: 'var(--tx)', fontSize: 16 }}>{idea.title}</div>
                        <div style={{ fontSize: 12, color: 'var(--tx3)' }}>
                          {ideaUser?.name || idea.user} • {ts(idea.created)}
                        </div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <div className={`badge badge-${statusColors[idea.st]}`}>{idea.st}</div>
                      <div className="badge badge-gray">{idea.cat}</div>
                    </div>
                  </div>

                  <p style={{ fontSize: 14, color: 'var(--tx2)', lineHeight: 1.6, marginBottom: 12 }}>
                    {idea.desc}
                  </p>

                  {/* AI Analysis Block */}
                  {idea.aiParsed && (
                    <div className="ai-block">
                      <div className="ai-block-header">
                        <Sparkles size={14} />
                        AI Analysis
                      </div>
                      
                      {/* Score Bar */}
                      <div style={{ marginBottom: 12 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                          <span style={{ fontSize: 13 }}>AI Score</span>
                          <span style={{ fontWeight: 700, color: idea.aiParsed.score >= 70 ? 'var(--green)' : idea.aiParsed.score >= 50 ? 'var(--amber)' : 'var(--red)' }}>
                            {idea.aiParsed.score}/100
                          </span>
                        </div>
                        <div className="progress-bar">
                          <div 
                            className="progress-fill" 
                            style={{ 
                              width: `${idea.aiParsed.score}%`, 
                              background: idea.aiParsed.score >= 70 ? 'var(--green)' : idea.aiParsed.score >= 50 ? 'var(--amber)' : 'var(--red)'
                            }} 
                          />
                        </div>
                      </div>

                      {/* Verdict Badge */}
                      <div className={`badge badge-${idea.aiParsed.verdict === 'Recommended' ? 'green' : idea.aiParsed.verdict === 'Consider' ? 'amber' : 'red'}`} style={{ marginBottom: 12 }}>
                        {idea.aiParsed.verdict}
                      </div>

                      {/* Summary */}
                      <p style={{ fontSize: 13, color: 'var(--tx2)', marginBottom: 12 }}>{idea.aiParsed.summary}</p>

                      {/* Pros & Cons */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                        <div>
                          <div style={{ fontSize: 11, color: 'var(--green)', fontWeight: 600, marginBottom: 6 }}>PROS</div>
                          {idea.aiParsed.pros?.map((p, i) => (
                            <div key={i} style={{ fontSize: 12, color: 'var(--tx2)', display: 'flex', gap: 6, marginBottom: 4 }}>
                              <ThumbsUp size={12} color="var(--green)" style={{ flexShrink: 0, marginTop: 2 }} />
                              {p}
                            </div>
                          ))}
                        </div>
                        <div>
                          <div style={{ fontSize: 11, color: 'var(--red)', fontWeight: 600, marginBottom: 6 }}>CONS</div>
                          {idea.aiParsed.cons?.map((c, i) => (
                            <div key={i} style={{ fontSize: 12, color: 'var(--tx2)', display: 'flex', gap: 6, marginBottom: 4 }}>
                              <ThumbsDown size={12} color="var(--red)" style={{ flexShrink: 0, marginTop: 2 }} />
                              {c}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tasks */}
                      {idea.aiParsed.tasks?.length > 0 && (
                        <div style={{ marginBottom: 12 }}>
                          <div style={{ fontSize: 11, color: 'var(--purple)', fontWeight: 600, marginBottom: 6 }}>SUGGESTED TASKS</div>
                          {idea.aiParsed.tasks.map((t, i) => (
                            <div key={i} style={{ fontSize: 12, color: 'var(--tx2)', display: 'flex', gap: 6, marginBottom: 4 }}>
                              <CheckSquare size={12} color="var(--purple)" style={{ flexShrink: 0, marginTop: 2 }} />
                              {t}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Next Step */}
                      <div style={{ 
                        background: 'rgba(139,92,246,0.1)', 
                        padding: 10, 
                        borderRadius: 8, 
                        fontSize: 12 
                      }}>
                        <strong style={{ color: 'var(--purple)' }}>Next Step:</strong> {idea.aiParsed.nextStep}
                      </div>
                    </div>
                  )}

                  {/* CEO Comment */}
                  {idea.cc && (
                    <div style={{ 
                      background: 'rgba(255,140,0,0.08)', 
                      border: '1px solid rgba(255,140,0,0.2)',
                      borderRadius: 10,
                      padding: 12,
                      marginTop: 12
                    }}>
                      <div style={{ fontSize: 11, color: 'var(--sun)', fontWeight: 600, marginBottom: 4, display: 'flex', alignItems: 'center', gap: 6 }}>
                        <Crown size={12} /> CEO COMMENT
                      </div>
                      <p style={{ fontSize: 13, color: 'var(--tx2)' }}>{idea.cc}</p>
                    </div>
                  )}

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
                    {idea.user === user && !idea.aiParsed && (
                      <button 
                        className="btn btn-purple btn-sm"
                        onClick={() => analyzeIdea(idea)}
                        disabled={aiLoading}
                      >
                        {aiLoading ? <span className="spinner" /> : <Sparkles size={14} />} AI Analyze
                      </button>
                    )}
                    {isCEO && idea.st === 'pending' && (
                      <>
                        <button className="btn btn-green btn-sm" onClick={() => approveIdea(idea.id, 'approved', null)}>
                          <Check size={14} /> Approve
                        </button>
                        <button className="btn btn-red btn-sm" onClick={() => approveIdea(idea.id, 'rejected', null)}>
                          <X size={14} /> Reject
                        </button>
                        <button className="btn btn-ghost btn-sm" onClick={() => om('m-ceo-review', idea)}>
                          <Edit size={14} /> Review
                        </button>
                      </>
                    )}
                    {isCEO && idea.st === 'approved' && (
                      <button className="btn btn-blue btn-sm" onClick={() => approveIdea(idea.id, 'building', null)}>
                        <Rocket size={14} /> Start Building
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // RENDER: IDEA PIPELINE PAGE
  // ═══════════════════════════════════════════════════════════════════════════
  const renderIdeaPipeline = () => {
    const stages = ['pending', 'approved', 'building', 'launched', 'rejected'];
    const stageLabels = {
      pending: 'Submitted',
      approved: 'Approved',
      building: 'Building',
      launched: 'Launched',
      rejected: 'Rejected'
    };
    const stageColors = {
      pending: 'var(--amber)',
      approved: 'var(--green)',
      building: 'var(--blue)',
      launched: 'var(--purple)',
      rejected: 'var(--red)'
    };
    const stageIcons = {
      pending: Lightbulb,
      approved: Check,
      building: Rocket,
      launched: Star,
      rejected: X
    };

    const getIdeasByStage = (stage) => ideas.filter(i => i.st === stage);
    
    // Top ideas by AI score
    const topIdeas = ideas
      .filter(i => i.aiParsed?.score)
      .sort((a, b) => (b.aiParsed?.score || 0) - (a.aiParsed?.score || 0))
      .slice(0, 5);

    return (
      <div>
        {/* Pipeline Flow */}
        <div style={{ 
          display: 'flex', 
          gap: 12, 
          marginBottom: 32,
          overflowX: 'auto',
          paddingBottom: 8
        }}>
          {stages.map((stage, idx) => {
            const Icon = stageIcons[stage];
            const count = getIdeasByStage(stage).length;
            return (
              <React.Fragment key={stage}>
                <div 
                  className="pipeline-stage"
                  onClick={() => { setFilterTab(stage); goTo('ideas'); }}
                  style={{ borderColor: filterTab === stage ? stageColors[stage] : 'var(--border)' }}
                >
                  <div style={{ 
                    width: 48, 
                    height: 48, 
                    borderRadius: '50%',
                    background: `${stageColors[stage]}20`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 8
                  }}>
                    <Icon size={24} color={stageColors[stage]} />
                  </div>
                  <div className="pipeline-stage-count">{count}</div>
                  <div className="pipeline-stage-label">{stageLabels[stage]}</div>
                </div>
                {idx < stages.length - 1 && (
                  <div style={{ display: 'flex', alignItems: 'center', color: 'var(--tx3)' }}>
                    <ArrowRight size={20} />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Journey Board */}
        <div className="card" style={{ marginBottom: 24 }}>
          <h3 style={{ fontSize: 16, marginBottom: 16 }}>Idea Journey Board</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12 }}>
            {stages.map(stage => (
              <div key={stage}>
                <div style={{ 
                  fontSize: 12, 
                  fontWeight: 600, 
                  color: stageColors[stage],
                  marginBottom: 12,
                  textTransform: 'uppercase',
                  letterSpacing: 0.5
                }}>
                  {stageLabels[stage]} ({getIdeasByStage(stage).length})
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {getIdeasByStage(stage).slice(0, 4).map(idea => (
                    <div 
                      key={idea.id}
                      style={{ 
                        background: 'var(--bg2)',
                        borderRadius: 8,
                        padding: 10,
                        borderLeft: `3px solid ${stageColors[stage]}`,
                        cursor: 'pointer'
                      }}
                      onClick={() => { setFilterTab(stage); goTo('ideas'); }}
                    >
                      <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 4 }}>{idea.title}</div>
                      <div style={{ fontSize: 11, color: 'var(--tx3)' }}>{idea.cat}</div>
                    </div>
                  ))}
                  {getIdeasByStage(stage).length > 4 && (
                    <div style={{ fontSize: 11, color: 'var(--tx3)', textAlign: 'center' }}>
                      +{getIdeasByStage(stage).length - 4} more
                    </div>
                  )}
                  {getIdeasByStage(stage).length === 0 && (
                    <div style={{ fontSize: 11, color: 'var(--tx3)', textAlign: 'center', padding: 20 }}>
                      No ideas
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Ideas Leaderboard */}
        <div className="card">
          <h3 style={{ fontSize: 16, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
            <Trophy size={20} color="var(--amber)" />
            Top Ideas by AI Score
          </h3>
          {topIdeas.length === 0 ? (
            <div className="empty-state" style={{ padding: 40 }}>
              <Brain />
              <h3>No Scored Ideas</h3>
              <p>Submit ideas and run AI analysis to see rankings</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {topIdeas.map((idea, idx) => {
                const ideaUser = users[idea.user];
                return (
                  <div 
                    key={idea.id}
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 16,
                      padding: 14,
                      background: 'var(--bg2)',
                      borderRadius: 10
                    }}
                  >
                    <div style={{ 
                      width: 32, 
                      height: 32, 
                      borderRadius: '50%',
                      background: idx === 0 ? 'var(--amber)' : idx === 1 ? 'var(--tx3)' : idx === 2 ? '#CD7F32' : 'var(--bg)',
                      color: idx < 3 ? '#000' : 'var(--tx2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: 14
                    }}>
                      {idx + 1}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, marginBottom: 2 }}>{idea.title}</div>
                      <div style={{ fontSize: 12, color: 'var(--tx3)' }}>
                        {ideaUser?.name || idea.user} • {idea.cat}
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ 
                        fontFamily: 'Syne', 
                        fontSize: 24, 
                        fontWeight: 700,
                        color: idea.aiParsed.score >= 70 ? 'var(--green)' : 'var(--amber)'
                      }}>
                        {idea.aiParsed.score}
                      </div>
                      <div style={{ fontSize: 10, color: 'var(--tx3)' }}>AI SCORE</div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // RENDER: CEO REVIEW BOARD PAGE
  // ═══════════════════════════════════════════════════════════════════════════
  const renderCEOBoard = () => {
    const tabs = ['pending', 'approved', 'building', 'rejected'];
    const statusColors = {
      pending: 'amber',
      approved: 'green',
      building: 'blue',
      rejected: 'red'
    };

    const filteredIdeas = ideas.filter(i => {
      if (filterTab === 'all') return true;
      return i.st === filterTab;
    });

    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <div>
            <h2 style={{ fontSize: 20, marginBottom: 4, display: 'flex', alignItems: 'center', gap: 10 }}>
              <Crown size={24} color="var(--sun)" />
              CEO Review Board
            </h2>
            <p style={{ color: 'var(--tx2)', fontSize: 14 }}>Review, approve, and guide team ideas</p>
          </div>
          {ideas.filter(i => i.st === 'pending').length > 0 && (
            <div className="badge badge-amber" style={{ fontSize: 14, padding: '8px 16px' }}>
              {ideas.filter(i => i.st === 'pending').length} Pending Review
            </div>
          )}
        </div>

        {/* Tabs */}
        <div className="tabs">
          {tabs.map(tab => (
            <div
              key={tab}
              className={`tab ${filterTab === tab ? 'active' : ''}`}
              onClick={() => setFilterTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              <span style={{ marginLeft: 6, opacity: 0.7 }}>
                ({ideas.filter(i => i.st === tab).length})
              </span>
            </div>
          ))}
        </div>

        {/* Ideas */}
        {filteredIdeas.length === 0 ? (
          <div className="empty-state">
            <Check />
            <h3>No Ideas to Review</h3>
            <p>All caught up! Check back later.</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {filteredIdeas.sort((a, b) => new Date(b.created) - new Date(a.created)).map(idea => {
              const ideaUser = users[idea.user];
              return (
                <div key={idea.id} className="card-elevated" style={{ padding: 24 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div 
                        className="avatar avatar-lg"
                        style={{ background: ideaUser?.col || 'var(--tx3)', color: '#fff' }}
                      >
                        {ideaUser?.av || '?'}
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 2 }}>{idea.title}</div>
                        <div style={{ fontSize: 13, color: 'var(--tx2)' }}>
                          by {ideaUser?.name || idea.user} • {idea.cat} • {ts(idea.created)}
                        </div>
                      </div>
                    </div>
                    <div className={`badge badge-${statusColors[idea.st]}`}>{idea.st}</div>
                  </div>

                  <p style={{ fontSize: 15, color: 'var(--tx)', lineHeight: 1.7, marginBottom: 20 }}>
                    {idea.desc}
                  </p>

                  {/* AI Analysis */}
                  {idea.aiParsed && (
                    <div className="ai-block" style={{ marginBottom: 20 }}>
                      <div className="ai-block-header">
                        <Sparkles size={14} />
                        AI Analysis — Score: {idea.aiParsed.score}/100 — {idea.aiParsed.verdict}
                      </div>
                      <p style={{ fontSize: 13, color: 'var(--tx2)', marginBottom: 10 }}>{idea.aiParsed.summary}</p>
                      
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                        <div>
                          <div style={{ fontSize: 11, color: 'var(--green)', fontWeight: 600, marginBottom: 6 }}>PROS</div>
                          {idea.aiParsed.pros?.map((p, i) => (
                            <div key={i} style={{ fontSize: 12, color: 'var(--tx2)', marginBottom: 4 }}>• {p}</div>
                          ))}
                        </div>
                        <div>
                          <div style={{ fontSize: 11, color: 'var(--red)', fontWeight: 600, marginBottom: 6 }}>CONS</div>
                          {idea.aiParsed.cons?.map((c, i) => (
                            <div key={i} style={{ fontSize: 12, color: 'var(--tx2)', marginBottom: 4 }}>• {c}</div>
                          ))}
                        </div>
                      </div>

                      <div style={{ marginTop: 12, fontSize: 12 }}>
                        <strong style={{ color: 'var(--purple)' }}>Next Step:</strong> {idea.aiParsed.nextStep}
                      </div>
                    </div>
                  )}

                  {/* CEO Comment Input */}
                  {idea.st === 'pending' && (
                    <div style={{ marginBottom: 16 }}>
                      <label style={{ display: 'block', marginBottom: 8, fontSize: 13, color: 'var(--tx2)' }}>
                        CEO Comment (optional)
                      </label>
                      <textarea
                        className="textarea"
                        placeholder="Add your thoughts, suggestions, or conditions..."
                        value={ceoComment[idea.id] || idea.cc || ''}
                        onChange={(e) => setCeoComment({ ...ceoComment, [idea.id]: e.target.value })}
                        style={{ minHeight: 60 }}
                      />
                    </div>
                  )}

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                    {!idea.aiParsed && (
                      <button 
                        className="btn btn-purple"
                        onClick={() => analyzeIdea(idea)}
                        disabled={aiLoading}
                      >
                        {aiLoading ? <span className="spinner" /> : <Sparkles size={16} />} AI Analyze
                      </button>
                    )}
                    {idea.st === 'pending' && (
                      <>
                        <button 
                          className="btn btn-green"
                          onClick={() => approveIdea(idea.id, 'approved', ceoComment[idea.id])}
                        >
                          <Check size={16} /> Approve
                        </button>
                        <button 
                          className="btn btn-blue"
                          onClick={() => approveIdea(idea.id, 'building', ceoComment[idea.id])}
                        >
                          <Rocket size={16} /> Approve & Build
                        </button>
                        <button 
                          className="btn btn-red"
                          onClick={() => approveIdea(idea.id, 'rejected', ceoComment[idea.id])}
                        >
                          <X size={16} /> Reject
                        </button>
                      </>
                    )}
                    {idea.st === 'approved' && (
                      <button 
                        className="btn btn-blue"
                        onClick={() => approveIdea(idea.id, 'building', null)}
                      >
                        <Rocket size={16} /> Start Building
                      </button>
                    )}
                    {idea.st === 'building' && (
                      <button 
                        className="btn btn-purple"
                        onClick={() => approveIdea(idea.id, 'launched', null)}
                      >
                        <Star size={16} /> Mark Launched
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // RENDER: TEAM PULSE
  // ═══════════════════════════════════════════════════════════════════════════
  const renderTeamPulse = () => {
    if (!isCEO) {
      return (
        <div className="page-container">
          <div className="card" style={{ padding: 24 }}>
            <h2 style={{ marginBottom: 8 }}>Access Restricted</h2>
            <p style={{ color: 'var(--tx2)' }}>Team Pulse is only visible to CEO/Admin users.</p>
          </div>
        </div>
      );
    }

    const pulseTabList = [
      { id: 'overview', label: 'Overview', icon: Users },
      { id: 'tracking', label: 'Work Tracking', icon: Clock },
      { id: 'performance', label: 'Performance', icon: BarChart3 },
      { id: 'activity', label: 'Activity Log', icon: Activity }
    ];

    // Format time
    const formatDuration = (mins) => {
      const h = Math.floor(mins / 60);
      const m = mins % 60;
      return h > 0 ? `${h}h ${m}m` : `${m}m`;
    };

    const statusColors = { online: '#00D68F', busy: '#FFB547', offline: '#6B7280' };
    const memberEntries = Object.entries(users).filter(([_, u]) => u.active !== false);

    return (
      <div className="page-container">
        <div className="page-header">
          <div>
            <h1>Team Pulse</h1>
            <p className="text-muted">Real-time team activity and performance monitoring</p>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <div className="stat-badge" style={{ background: 'rgba(0,214,143,0.2)', color: '#00D68F' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#00D68F' }} />
              {Object.values(users).filter(u => u.status === 'online').length} Online
            </div>
            <div className="stat-badge" style={{ background: 'rgba(255,181,71,0.2)', color: '#FFB547' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#FFB547' }} />
              {Object.values(users).filter(u => u.status === 'busy').length} Busy
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="tab-nav" style={{ marginBottom: 24 }}>
          {pulseTabList.map(tab => (
            <button
              key={tab.id}
              className={`tab-btn ${pulseTab === tab.id ? 'active' : ''}`}
              onClick={() => setPulseTab(tab.id)}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {pulseTab === 'overview' && (
          <div className="grid-3">
            {Object.entries(users).filter(([_, u]) => u.active !== false).map(([uid, userData]) => {
              const dept = depts.find(d => d.name === userData.dept);
              const statusColors = { online: '#00D68F', busy: '#FFB547', offline: '#6B7280' };
              const isOnline = userData.status === 'online';
              
              return (
                <div key={uid} className="card" style={{ padding: 20 }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                    <div style={{ position: 'relative' }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: '50%',
                        background: userData.col || 'var(--sun)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 20, fontWeight: 700, color: '#000'
                      }}>
                        {userData.av}
                      </div>
                      <div style={{
                        position: 'absolute', bottom: 2, right: 2,
                        width: 14, height: 14, borderRadius: '50%',
                        background: statusColors[userData.status] || '#6B7280', border: '2px solid var(--card)'
                      }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ margin: 0, fontSize: 16 }}>{userData.name}</h3>
                      <p style={{ margin: '2px 0 0', fontSize: 13, color: 'var(--muted)' }}>{userData.role}</p>
                      {userData.dept && <span className="tag" style={{ fontSize: 11, marginTop: 4 }}>{userData.dept}</span>}
                    </div>
                  </div>
                  
                  {/* Session Timer */}
                  {isOnline && userData.loginTime && (
                    <div style={{
                      marginTop: 16, padding: 12, borderRadius: 8,
                      background: 'rgba(0,214,143,0.1)', border: '1px solid rgba(0,214,143,0.2)'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                        <Clock size={14} style={{ color: '#00D68F' }} />
                        <span style={{ fontSize: 12, color: '#00D68F' }}>Active Session</span>
                      </div>
                      <span style={{ fontSize: 20, fontWeight: 700, color: '#00D68F' }}>
                        {formatDuration(Math.floor((Date.now() - new Date(userData.loginTime)) / 60000))}
                      </span>
                    </div>
                  )}
                  
                  {/* Stats */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginTop: 16 }}>
                    <div style={{ textAlign: 'center', padding: 8, background: 'var(--bg-alt)', borderRadius: 6 }}>
                      <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--sun)' }}>
                        {tasks.filter(t => t.ow === uid && t.done).length}/{tasks.filter(t => t.ow === uid).length}
                      </div>
                      <div style={{ fontSize: 11, color: 'var(--muted)' }}>Tasks</div>
                    </div>
                    <div style={{ textAlign: 'center', padding: 8, background: 'var(--bg-alt)', borderRadius: 6 }}>
                      <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--flare)' }}>
                        {projects.filter(p => p.own === uid && p.st === 'active').length}
                      </div>
                      <div style={{ fontSize: 11, color: 'var(--muted)' }}>Projects</div>
                    </div>
                    <div style={{ textAlign: 'center', padding: 8, background: 'var(--bg-alt)', borderRadius: 6 }}>
                      <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--green)' }}>
                        {ideas.filter(i => i.user === uid).length}
                      </div>
                      <div style={{ fontSize: 11, color: 'var(--muted)' }}>Ideas</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Work Tracking Tab */}
        {pulseTab === 'tracking' && (
          <div className="card" style={{ padding: 24 }}>
            <h3 style={{ marginBottom: 20,display: 'flex', alignItems: 'center', gap: 8 }}>
              <Clock size={20} />
              Today's Work Sessions
            </h3>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <th style={{ textAlign: 'left', padding: '12px 8px', color: 'var(--muted)', fontWeight: 500 }}>Team Member</th>
                  <th style={{ textAlign: 'left', padding: '12px 8px', color: 'var(--muted)', fontWeight: 500 }}>Login Time</th>
                  <th style={{ textAlign: 'left', padding: '12px 8px', color: 'var(--muted)', fontWeight: 500 }}>Logout Time</th>
                  <th style={{ textAlign: 'left', padding: '12px 8px', color: 'var(--muted)', fontWeight: 500 }}>Duration</th>
                  <th style={{ textAlign: 'left', padding: '12px 8px', color: 'var(--muted)', fontWeight: 500 }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {/* Generate work sessions from users who have logged in */}
              {Object.entries(users).filter(([_, u]) => u.status === 'online' || u.lastSeen).slice(0, 10).map(([uid, userData], idx) => {
                  const loginTime = userData.loginTime || userData.lastSeen;
                  const isOnline = userData.status === 'online';
                  const inTime = loginTime ? new Date(loginTime) : null;
                  const duration = inTime ? Math.floor((Date.now() - inTime) / 60000) : 0;
                  
                  return (
                    <tr key={idx} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td style={{ padding: '12px 8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <div style={{
                            width: 32, height: 32, borderRadius: '50%',
                            background: userData.col || 'var(--sun)', color: '#000',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: 12, fontWeight: 700
                          }}>
                            {userData.av}
                          </div>
                          {userData.name}
                        </div>
                      </td>
                      <td style={{ padding: '12px 8px', color: 'var(--muted)' }}>
                        {inTime ? inTime.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }) : '—'}
                      </td>
                      <td style={{ padding: '12px 8px', color: 'var(--muted)' }}>
                        {!isOnline && userData.lastSeen ? new Date(userData.lastSeen).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }) : '—'}
                      </td>
                      <td style={{ padding: '12px 8px', fontWeight: 600 }}>
                        {formatDuration(duration)}
                      </td>
                      <td style={{ padding: '12px 8px' }}>
                        <span style={{
                          padding: '4px 8px', borderRadius: 4, fontSize: 12,
                          background: isOnline ? 'rgba(0,214,143,0.2)' : 'rgba(107,114,128,0.2)',
                          color: isOnline ? '#00D68F' : '#6B7280'
                        }}>
                          {isOnline ? 'Active' : 'Offline'}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {sessions.length === 0 && (
              <div className="empty-state">
                <Clock size={40} />
                <p>No sessions recorded yet</p>
              </div>
            )}
          </div>
        )}

        {/* Performance Tab */}
        {pulseTab === 'performance' && (
          <div className="grid-2">
            <div className="card" style={{ padding: 24 }}>
              <h3 style={{ marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
                <BarChart3 size={20} />
                Task Completion Rate
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {Object.entries(users).filter(([_, u]) => u.active !== false).map(([uid, userData]) => {
                  const userTasks = tasks.filter(t => t.ow === uid);
                  const completed = userTasks.filter(t => t.done).length;
                  const rate = userTasks.length > 0 ? Math.round((completed / userTasks.length) * 100) : 0;
                  
                  return (
                    <div key={uid}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                        <span style={{ fontSize: 14 }}>{userData.name}</span>
                        <span style={{ fontSize: 14, color: 'var(--sun)', fontWeight: 600 }}>{rate}%</span>
                      </div>
                      <div style={{ height: 8, background: 'var(--bg-alt)', borderRadius: 4, overflow: 'hidden' }}>
                        <div style={{
                          width: `${rate}%`, height: '100%',
                          background: rate >= 70 ? '#00D68F' : rate >= 40 ? '#FFB547' : '#EF4444',
                          borderRadius: 4, transition: 'width 0.3s'
                        }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="card" style={{ padding: 24 }}>
              <h3 style={{ marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
                <Lightbulb size={20} />
                Ideas Contributed
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {Object.entries(users).filter(([_, u]) => u.active !== false).map(([uid, userData]) => {
                  const userIdeas = ideas.filter(i => i.user === uid).length;
                  const maxIdeas = Math.max(...Object.keys(users).map(u => ideas.filter(i => i.user === u).length), 1);
                  const rate = Math.round((userIdeas / maxIdeas) * 100);
                  
                  return (
                    <div key={uid}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                        <span style={{ fontSize: 14 }}>{userData.name}</span>
                        <span style={{ fontSize: 14, color: 'var(--flare)', fontWeight: 600 }}>{userIdeas}</span>
                      </div>
                      <div style={{ height: 8, background: 'var(--bg-alt)', borderRadius: 4, overflow: 'hidden' }}>
                        <div style={{
                          width: `${rate}%`, height: '100%',
                          background: 'linear-gradient(90deg, var(--sun), var(--flare))',
                          borderRadius: 4, transition: 'width 0.3s'
                        }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="card" style={{ padding: 24, gridColumn: '1 / -1' }}>
              <h3 style={{ marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
                <Trophy size={20} />
                Leaderboard
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                {['Tasks Champion', 'Idea Generator', 'Most Active'].map((title, idx) => {
                  let winner = null;
                  let value = 0;

                  if (idx === 0) {
                    memberEntries.forEach(([uid, userData]) => {
                      const done = tasks.filter(t => t.ow === uid && t.done).length;
                      if (done > value) {
                        value = done;
                        winner = userData;
                      }
                    });
                  } else if (idx === 1) {
                    memberEntries.forEach(([uid, userData]) => {
                      const count = ideas.filter(i => i.user === uid).length;
                      if (count > value) {
                        value = count;
                        winner = userData;
                      }
                    });
                  } else {
                    memberEntries.forEach(([_, userData]) => {
                      const minutes = (userData.sessions || []).reduce((acc, session) => {
                        if (!session?.login) return acc;
                        const start = new Date(session.login).getTime();
                        const end = session.logout ? new Date(session.logout).getTime() : Date.now();
                        if (Number.isNaN(start) || Number.isNaN(end) || end <= start) return acc;
                        return acc + Math.floor((end - start) / 60000);
                      }, 0);
                      if (minutes > value) {
                        value = minutes;
                        winner = userData;
                      }
                    });
                  }
                  
                  return (
                    <div key={title} style={{
                      padding: 16, borderRadius: 12, textAlign: 'center',
                      background: 'linear-gradient(135deg, rgba(255,140,0,0.1), rgba(255,75,43,0.1))',
                      border: '1px solid rgba(255,140,0,0.2)'
                    }}>
                      <Trophy size={24} style={{ color: 'var(--sun)', marginBottom: 8 }} />
                      <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 8 }}>{title}</div>
                      <div style={{ fontSize: 16, fontWeight: 700 }}>{winner?.name || 'N/A'}</div>
                      <div style={{ fontSize: 14, color: 'var(--sun)' }}>
                        {idx === 2 ? `${value} min active` : `${value} ${idx === 0 ? 'tasks' : 'ideas'}`}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Activity Log Tab */}
        {pulseTab === 'activity' && (
          <div className="card" style={{ padding: 24 }}>
            <h3 style={{ marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
              <Activity size={20} />
              Recent Activity
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {log.slice(-30).reverse().map((entry, idx) => {
                const entryUser = users[entry.user];
                return (
                  <div key={idx} style={{
                    display: 'flex', alignItems: 'flex-start', gap: 12,
                    padding: 12, borderRadius: 8, background: 'var(--bg-alt)'
                  }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: '50%',
                      background: entryUser?.col || 'var(--sun)', color: '#000',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 12, fontWeight: 700, flexShrink: 0
                    }}>
                      {entryUser?.av || '?'}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <span style={{ fontWeight: 600 }}>{entryUser?.name || 'System'}</span>
                        <span style={{ fontSize: 12, color: 'var(--muted)' }}>
                          {new Date(entry.time).toLocaleString('en-IN', { dateStyle: 'short', timeStyle: 'short' })}
                        </span>
                      </div>
                      <p style={{ margin: '4px 0 0', fontSize: 14, color: 'var(--muted)' }}>{entry.detail}</p>
                    </div>
                  </div>
                );
              })}
              {log.length === 0 && (
                <div className="empty-state">
                  <Activity size={40} />
                  <p>No activity recorded yet</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // RENDER: MESSAGES
  // ═══════════════════════════════════════════════════════════════════════════
  const renderMessages = () => {
    // Get conversations from messages object
    const getConversations = () => {
      const convos = [];
      Object.entries(messages).forEach(([key, msgs]) => {
        const [user1, user2] = key.split(':');
        // Check if current user is part of this conversation
        if (user1 === user || user2 === user) {
          const otherId = user1 === user ? user2 : user1;
          const unread = msgs.filter(m => m.from !== user && !m.read).length;
          convos.push({
            id: key,
            userId: otherId,
            messages: msgs,
            unread
          });
        }
      });
      // Sort by latest message
      return convos.sort((a, b) => {
        const aLast = a.messages[a.messages.length - 1];
        const bLast = b.messages[b.messages.length - 1];
        return new Date(bLast.time) - new Date(aLast.time);
      });
    };

    const conversations = getConversations();

    // Get current conversation messages
    const currentConvo = conversations.find(c => c.userId === selectedConvo);
    const currentMessages = currentConvo?.messages || [];

    const selectedUserData = users[selectedConvo];

    const sendMessage = () => {
      if (!msgInput.trim() || !selectedConvo) return;
      
      // Find or create conversation key
      const key1 = `${user}:${selectedConvo}`;
      const key2 = `${selectedConvo}:${user}`;
      const existingKey = messages[key1] ? key1 : messages[key2] ? key2 : key1;
      
      setMessages(prev => ({
        ...prev,
        [existingKey]: [
          ...(prev[existingKey] || []),
          {
            from: user,
            text: msgInput.trim(),
            time: new Date().toISOString(),
            read: false
          }
        ]
      }));
      setMsgInput('');
    };

    const startNewConversation = (userId) => {
      setSelectedConvo(userId);
      setShowNewDM(false);
    };

    const totalUnread = conversations.reduce((acc, c) => acc + c.unread, 0);

    return (
      <div className="page-container">
        <div className="page-header">
          <div>
            <h1>Messages</h1>
            <p className="text-muted">Direct messaging with your team</p>
          </div>
          <button className="btn btn-primary" onClick={() => setShowNewDM(true)}>
            <MessageSquarePlus size={18} />
            New Message
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 20, height: 'calc(100vh - 200px)' }}>
          {/* Conversations List */}
          <div className="card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: 16, borderBottom: '1px solid var(--border)' }}>
              <div style={{ position: 'relative' }}>
                <Search size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)' }} />
                <input
                  type="text"
                  placeholder="Search conversations..."
                  value={msgSearchTerm}
                  onChange={(e) => setMsgSearchTerm(e.target.value)}
                  style={{ width: '100%', paddingLeft: 36 }}
                />
              </div>
            </div>
            
            <div style={{ flex: 1, overflowY: 'auto' }}>
              {conversations.filter(c => {
                const u = users[c.userId];
                return !msgSearchTerm || u?.name.toLowerCase().includes(msgSearchTerm.toLowerCase());
              }).map(convo => {
                const otherUser = users[convo.userId];
                const lastMsg = convo.messages[convo.messages.length - 1];
                const isSelected = selectedConvo === convo.userId;
                
                return (
                  <div
                    key={convo.userId}
                    onClick={() => setSelectedConvo(convo.userId)}
                    style={{
                      padding: 16, cursor: 'pointer',
                      borderBottom: '1px solid var(--border)',
                      background: isSelected ? 'rgba(255,140,0,0.1)' : 'transparent',
                      borderLeft: isSelected ? '3px solid var(--sun)' : '3px solid transparent'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{
                        width: 44, height: 44, borderRadius: '50%',
                        background: otherUser?.col || 'var(--sun)', color: '#000',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 14, fontWeight: 700, flexShrink: 0
                      }}>
                        {otherUser?.av || '?'}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontWeight: 600 }}>{otherUser?.name}</span>
                          {convo.unread > 0 && (
                            <span style={{
                              minWidth: 20, height: 20, borderRadius: '50%',
                              background: 'var(--sun)', color: '#000',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              fontSize: 11, fontWeight: 700
                            }}>
                              {convo.unread}
                            </span>
                          )}
                        </div>
                        <p style={{
                          margin: '2px 0 0', fontSize: 13, color: 'var(--muted)',
                          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'
                        }}>
                          {lastMsg.from === user && <span style={{ opacity: 0.6 }}>You: </span>}
                          {lastMsg.text}
                        </p>
                        <span style={{ fontSize: 11, color: 'var(--muted)' }}>
                          {new Date(lastMsg.time).toLocaleString('en-IN', { dateStyle: 'short', timeStyle: 'short' })}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
              {conversations.length === 0 && (
                <div className="empty-state" style={{ padding: 40 }}>
                  <MessageCircle size={40} />
                  <p>No conversations yet</p>
                  <button className="btn btn-sm" onClick={() => setShowNewDM(true)}>Start a conversation</button>
                </div>
              )}
            </div>
          </div>

          {/* Chat Area */}
          <div className="card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            {selectedConvo ? (
              <>
                {/* Chat Header */}
                <div style={{
                  padding: 16, borderBottom: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', gap: 12
                }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: selectedUserData?.col || 'var(--sun)', color: '#000',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 14, fontWeight: 700
                  }}>
                    {selectedUserData?.av || '?'}
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: 16 }}>{selectedUserData?.name}</h3>
                    <p style={{ margin: 0, fontSize: 13, color: 'var(--muted)' }}>{selectedUserData?.role}</p>
                  </div>
                </div>

                {/* Messages */}
                <div style={{ flex: 1, padding: 16, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {currentMessages.map((msg, idx) => {
                    const isMine = msg.from === user;
                    return (
                      <div
                        key={idx}
                        style={{
                          maxWidth: '70%',
                          alignSelf: isMine ? 'flex-end' : 'flex-start'
                        }}
                      >
                        <div style={{
                          padding: '10px 14px', borderRadius: 12,
                          background: isMine
                            ? 'linear-gradient(135deg, var(--sun), var(--flare))'
                            : 'var(--bg-alt)',
                          color: isMine ? '#000' : 'inherit'
                        }}>
                          {msg.text}
                        </div>
                        <div style={{
                          display: 'flex', alignItems: 'center', gap: 4,
                          justifyContent: isMine ? 'flex-end' : 'flex-start',
                          marginTop: 4
                        }}>
                          <span style={{ fontSize: 11, color: 'var(--muted)' }}>
                            {new Date(msg.ts).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
                          </span>
                          {isMine && (
                            <span style={{ fontSize: 11, color: msg.read ? 'var(--green)' : 'var(--muted)' }}>
                              {msg.read ? '✓✓' : '✓'}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Message Input */}
                <div style={{
                  padding: 16, borderTop: '1px solid var(--border)',
                  display: 'flex', gap: 12
                }}>
                  <input
                    type="text"
                    placeholder="Type a message..."
                    value={msgInput}
                    onChange={(e) => setMsgInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                    style={{ flex: 1 }}
                  />
                  <button className="btn btn-primary" onClick={sendMessage} disabled={!msgInput.trim()}>
                    <Send size={18} />
                  </button>
                </div>
              </>
            ) : (
              <div className="empty-state" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <MessageCircle size={48} style={{ color: 'var(--sun)' }} />
                <h3>Select a conversation</h3>
                <p>Choose a conversation from the list or start a new one</p>
              </div>
            )}
          </div>
        </div>

        {/* New DM Modal */}
        {showNewDM && (
          <div className="modal-overlay" onClick={() => setShowNewDM(false)}>
            <div className="modal" onClick={e => e.stopPropagation()} style={{ maxWidth: 400 }}>
              <div className="modal-header">
                <h2>New Message</h2>
                <button className="btn btn-ghost" onClick={() => setShowNewDM(false)}>
                  <X size={20} />
                </button>
              </div>
              <div style={{ padding: 20 }}>
                <p style={{ marginBottom: 16, color: 'var(--muted)' }}>Select a team member to message:</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {Object.entries(users).filter(([uid, u]) => uid !== user && u.active !== false).map(([uid, userData]) => (
                    <button
                      key={uid}
                      className="btn btn-ghost"
                      onClick={() => { setSelectedConvo(uid); setShowNewDM(false); }}
                      style={{ justifyContent: 'flex-start', padding: 12 }}
                    >
                      <div style={{
                        width: 36, height: 36, borderRadius: '50%',
                        background: userData.col || 'var(--sun)', color: '#000',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 12, fontWeight: 700
                      }}>
                        {userData.av}
                      </div>
                      <div style={{ textAlign: 'left' }}>
                        <div style={{ fontWeight: 600 }}>{userData.name}</div>
                        <div style={{ fontSize: 12, color: 'var(--muted)' }}>{userData.role}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // RENDER: AIC DEMO DASHBOARD
  // ═══════════════════════════════════════════════════════════════════════════
  const renderAICDemo = () => {
    // Demo date: March 20, 2026
    const demoDate = new Date('2026-03-20T10:00:00');
    const now = new Date();
    const diff = demoDate - now;
    const daysLeft = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
    const hoursLeft = Math.max(0, Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));

    // Hero Metrics
    const heroMetrics = [
      { label: 'Total Leads', value: leads.length, icon: Users, color: '#FF8C00' },
      { label: 'Pipeline Value', value: `₹${(leads.reduce((a, l) => a + (l.val || 0), 0) / 100000).toFixed(1)}L`, icon: IndianRupee, color: '#00D68F' },
      { label: 'Won Deals', value: leads.filter(l => l.stage === 'won').length, icon: Trophy, color: '#FFB547' },
      { label: 'Team Ideas', value: ideas.length, icon: Lightbulb, color: '#FF4B2B' },
      { label: 'Active Projects', value: projects.filter(p => p.status === 'active').length, icon: FolderKanban, color: '#8B5CF6' }
    ];

    // Grant allocation (₹10L total)
    const grantAllocation = [
      { category: 'Product Development', amount: 350000, percent: 35 },
      { category: 'Marketing & Sales', amount: 250000, percent: 25 },
      { category: 'Operations', amount: 200000, percent: 20 },
      { category: 'Team & Training', amount: 150000, percent: 15 },
      { category: 'Contingency', amount: 50000, percent: 5 }
    ];

    // Investor Q&A
    const investorQA = [
      {
        q: 'What problem does SuryaSetu solve?',
        a: 'SuryaSetu bridges the gap between homeowners/businesses wanting to go solar and quality solar installers. We provide end-to-end advisory, helping customers navigate subsidies, select the right system, and connect with verified installers.'
      },
      {
        q: 'What is your revenue model?',
        a: 'We earn commission from solar installers for qualified leads (10-15% of project value), offer premium consultation packages (₹2,999-9,999), and partner with financing companies for solar loans.'
      },
      {
        q: 'What is your target market size?',
        a: 'The Indian rooftop solar market is ₹40,000 Cr annually. Pune Metro alone has 500,000+ residential and commercial buildings suitable for solar. Our initial TAM is ₹2,000 Cr in Pune region.'
      },
      {
        q: 'Who are your competitors?',
        a: 'Direct: SolarSquare, Loom Solar, Waaree (integrated). Indirect: Local installers. Our edge: Hyper-local focus on Pune, trusted advisory model, AI-powered matching, and post-installation support.'
      },
      {
        q: 'What are your key milestones?',
        a: '6 months: 100 installations, ₹2Cr GMV. 12 months: 500 installations, ₹10Cr GMV, break-even. 24 months: Expand to 3 cities, ₹50Cr GMV, 20% market share in Pune.'
      },
      {
        q: 'How will you use the AIC grant?',
        a: '35% Product (CRM, customer app), 25% Marketing (digital ads, partnerships), 20% Operations (office, tools), 15% Team (2 hires), 5% Contingency.'
      }
    ];

    return (
      <div className="page-container">
        {/* Countdown Header */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(255,140,0,0.2), rgba(255,75,43,0.2))',
          border: '1px solid rgba(255,140,0,0.3)',
          borderRadius: 16, padding: 24, marginBottom: 24, textAlign: 'center'
        }}>
          <div style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 8 }}>AIC-MIT ADT Demo Day</div>
          <div style={{ fontSize: 32, fontWeight: 800, marginBottom: 8 }}>March 20, 2026</div>
          <div style={{
            display: 'inline-flex', gap: 24, background: 'var(--card)',
            padding: '12px 24px', borderRadius: 12
          }}>
            <div>
              <div style={{ fontSize: 36, fontWeight: 800, color: 'var(--sun)' }}>{daysLeft}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)' }}>Days</div>
            </div>
            <div>
              <div style={{ fontSize: 36, fontWeight: 800, color: 'var(--flare)' }}>{hoursLeft}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)' }}>Hours</div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="tab-nav" style={{ marginBottom: 24 }}>
          {[
            { id: 'overview', label: 'Overview', icon: LayoutDashboard },
            { id: 'traction', label: 'Traction', icon: TrendingUp },
            { id: 'grant', label: 'Grant Plan', icon: IndianRupee },
            { id: 'checklist', label: 'Checklist', icon: CheckSquare },
            { id: 'qa', label: 'Investor Q&A', icon: MessageCircle }
          ].map(tab => (
            <button
              key={tab.id}
              className={`tab-btn ${aicTab === tab.id ? 'active' : ''}`}
              onClick={() => setAicTab(tab.id)}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {aicTab === 'overview' && (
          <>
            {/* Hero Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16, marginBottom: 24 }}>
              {heroMetrics.map((m, idx) => (
                <div key={idx} className="card" style={{ padding: 20, textAlign: 'center' }}>
                  <m.icon size={28} style={{ color: m.color, marginBottom: 8 }} />
                  <div style={{ fontSize: 28, fontWeight: 800, color: m.color }}>{m.value}</div>
                  <div style={{ fontSize: 13, color: 'var(--muted)' }}>{m.label}</div>
                </div>
              ))}
            </div>

            {/* Business Model & Market */}
            <div className="grid-2" style={{ marginBottom: 24 }}>
              <div className="card" style={{ padding: 24 }}>
                <h3 style={{ marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Briefcase size={20} />
                  Business Model
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    { stream: 'Lead Commission', desc: '10-15% from installers per conversion', potential: '₹50K-2L/month' },
                    { stream: 'Premium Advisory', desc: 'Detailed analysis packages', potential: '₹30K-80K/month' },
                    { stream: 'Financing Partners', desc: 'Referral fees from loan partners', potential: '₹10K-30K/month' }
                  ].map((item, idx) => (
                    <div key={idx} style={{
                      padding: 12, borderRadius: 8, background: 'var(--bg-alt)',
                      borderLeft: '3px solid var(--sun)'
                    }}>
                      <div style={{ fontWeight: 600, marginBottom: 4 }}>{item.stream}</div>
                      <div style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 4 }}>{item.desc}</div>
                      <div style={{ fontSize: 14, color: 'var(--green)', fontWeight: 600 }}>{item.potential}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card" style={{ padding: 24 }}>
                <h3 style={{ marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Globe size={20} />
                  Market Opportunity
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                      <span>TAM (India Rooftop Solar)</span>
                      <span style={{ color: 'var(--sun)', fontWeight: 700 }}>₹40,000 Cr</span>
                    </div>
                    <div style={{ height: 8, background: 'var(--bg-alt)', borderRadius: 4, overflow: 'hidden' }}>
                      <div style={{ width: '100%', height: '100%', background: 'var(--sun)', borderRadius: 4 }} />
                    </div>
                  </div>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                      <span>SAM (Maharashtra)</span>
                      <span style={{ color: 'var(--flare)', fontWeight: 700 }}>₹8,000 Cr</span>
                    </div>
                    <div style={{ height: 8, background: 'var(--bg-alt)', borderRadius: 4, overflow: 'hidden' }}>
                      <div style={{ width: '20%', height: '100%', background: 'var(--flare)', borderRadius: 4 }} />
                    </div>
                  </div>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                      <span>SOM (Pune Metro)</span>
                      <span style={{ color: 'var(--green)', fontWeight: 700 }}>₹2,000 Cr</span>
                    </div>
                    <div style={{ height: 8, background: 'var(--bg-alt)', borderRadius: 4, overflow: 'hidden' }}>
                      <div style={{ width: '5%', height: '100%', background: 'var(--green)', borderRadius: 4 }} />
                    </div>
                  </div>
                </div>
                <div style={{
                  marginTop: 16, padding: 12, borderRadius: 8,
                  background: 'rgba(0,214,143,0.1)', border: '1px solid rgba(0,214,143,0.2)'
                }}>
                  <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 4 }}>Target: 1% of SOM in Year 1</div>
                  <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--green)' }}>₹20 Cr GMV Potential</div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Traction Tab */}
        {aicTab === 'traction' && (
          <div className="card" style={{ padding: 24 }}>
            <h3 style={{ marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
              <TrendingUp size={20} />
              Traction Story
            </h3>
            <div style={{ position: 'relative', paddingLeft: 24 }}>
              {[
                { date: 'Nov 2025', event: 'Founded SuryaSetu', metric: 'Team of 4', color: '#FF8C00' },
                { date: 'Dec 2025', event: 'Joined AIC-MIT ADT', metric: 'Incubation Support', color: '#FFB547' },
                { date: 'Jan 2026', event: 'MVP Launch', metric: `${leads.length} leads captured`, color: '#00D68F' },
                { date: 'Feb 2026', event: 'First Conversions', metric: `${leads.filter(l => l.stage === 'won').length} installations`, color: '#8B5CF6' },
                { date: 'Mar 2026', event: 'Demo Day', metric: 'Grant Application', color: '#FF4B2B' }
              ].map((item, idx) => (
                <div key={idx} style={{ position: 'relative', paddingBottom: 32 }}>
                  <div style={{
                    position: 'absolute', left: -24, top: 0,
                    width: 16, height: 16, borderRadius: '50%',
                    background: item.color, border: '3px solid var(--card)'
                  }} />
                  {idx < 4 && (
                    <div style={{
                      position: 'absolute', left: -17, top: 16, width: 2, height: 'calc(100% - 8px)',
                      background: 'var(--border)'
                    }} />
                  )}
                  <div style={{ paddingLeft: 16 }}>
                    <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 4 }}>{item.date}</div>
                    <div style={{ fontWeight: 600, marginBottom: 4 }}>{item.event}</div>
                    <span className="tag" style={{ background: `${item.color}20`, color: item.color }}>{item.metric}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Grant Plan Tab */}
        {aicTab === 'grant' && (
          <div className="card" style={{ padding: 24 }}>
            <h3 style={{ marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
              <IndianRupee size={20} />
              Grant Allocation (₹10 Lakhs)
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {grantAllocation.map((item, idx) => (
                <div key={idx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                    <span>{item.category}</span>
                    <span style={{ fontWeight: 600 }}>₹{(item.amount / 100000).toFixed(1)}L ({item.percent}%)</span>
                  </div>
                  <div style={{ height: 24, background: 'var(--bg-alt)', borderRadius: 8, overflow: 'hidden' }}>
                    <div style={{
                      width: `${item.percent}%`, height: '100%',
                      background: `hsl(${30 + idx * 20}, 90%, 55%)`,
                      borderRadius: 8, transition: 'width 0.3s',
                      display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: 8
                    }}>
                      <span style={{ fontSize: 11, fontWeight: 700, color: '#000' }}>{item.percent}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{
              marginTop: 24, padding: 16, borderRadius: 8,
              background: 'linear-gradient(135deg, rgba(255,140,0,0.1), rgba(255,75,43,0.1))',
              border: '1px solid rgba(255,140,0,0.2)'
            }}>
              <h4 style={{ marginBottom: 12 }}>Expected ROI on Grant</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 24, fontWeight: 700, color: 'var(--sun)' }}>10x</div>
                  <div style={{ fontSize: 12, color: 'var(--muted)' }}>Revenue Multiple</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 24, fontWeight: 700, color: 'var(--green)' }}>200+</div>
                  <div style={{ fontSize: 12, color: 'var(--muted)' }}>Installations Y1</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 24, fontWeight: 700, color: 'var(--flare)' }}>5</div>
                  <div style={{ fontSize: 12, color: 'var(--muted)' }}>Jobs Created</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Checklist Tab */}
        {aicTab === 'checklist' && (
          <div className="card" style={{ padding: 24 }}>
            <h3 style={{ marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
              <CheckSquare size={20} />
              AIC Demo Day Checklist
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {aicChecklist.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setAicChecklist(prev => prev.map((c, i) => i === idx ? { ...c, done: !c.done } : c));
                    addLog(`${item.done ? 'Unchecked' : 'Checked'}: ${item.task}`);
                  }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 12, padding: 12,
                    borderRadius: 8, background: 'var(--bg-alt)', cursor: 'pointer',
                    border: item.done ? '1px solid rgba(0,214,143,0.3)' : '1px solid var(--border)'
                  }}
                >
                  <div style={{
                    width: 24, height: 24, borderRadius: 6,
                    border: item.done ? 'none' : '2px solid var(--border)',
                    background: item.done ? 'var(--green)' : 'transparent',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    {item.done && <Check size={16} style={{ color: '#000' }} />}
                  </div>
                  <span style={{
                    flex: 1,
                    textDecoration: item.done ? 'line-through' : 'none',
                    opacity: item.done ? 0.7 : 1
                  }}>
                    {item.task}
                  </span>
                </div>
              ))}
            </div>
            <div style={{
              marginTop: 16, padding: 12, borderRadius: 8,
              background: 'rgba(255,140,0,0.1)', border: '1px solid rgba(255,140,0,0.2)',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center'
            }}>
              <span>Progress</span>
              <span style={{ fontWeight: 700, color: 'var(--sun)' }}>
                {aicChecklist.filter(c => c.done).length} / {aicChecklist.length} Complete
              </span>
            </div>
          </div>
        )}

        {/* Investor Q&A Tab */}
        {aicTab === 'qa' && (
          <div className="card" style={{ padding: 24 }}>
            <h3 style={{ marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
              <MessageCircle size={20} />
              Investor Q&A Preparation
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {investorQA.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    borderRadius: 8, border: '1px solid var(--border)',
                    background: expandedFAQ === idx ? 'var(--bg-alt)' : 'transparent'
                  }}
                >
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                    style={{
                      width: '100%', padding: 16, background: 'none', border: 'none',
                      color: 'inherit', cursor: 'pointer', textAlign: 'left',
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                    }}
                  >
                    <span style={{ fontWeight: 600 }}>{item.q}</span>
                    {expandedFAQ === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  {expandedFAQ === idx && (
                    <div style={{
                      padding: '0 16px 16px', fontSize: 14, lineHeight: 1.6,
                      color: 'var(--muted)', borderTop: '1px solid var(--border)'
                    }}>
                      <p style={{ margin: '12px 0 0' }}>{item.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // RENDER: AUTOMATIONS
  // ═══════════════════════════════════════════════════════════════════════════
  const renderAutomations = () => {
    const statusColors = { live: '#00D68F', building: '#FFB547', planned: '#6B7280' };
    const statusLabels = { live: 'Live', building: 'Building', planned: 'Planned' };

    const flowStats = {
      total: n8nFlows.length,
      live: n8nFlows.filter(f => f.st === 'live').length,
      building: n8nFlows.filter(f => f.st === 'building').length,
      totalRuns: n8nFlows.reduce((a, f) => a + (f.runs || 0), 0)
    };

    return (
      <div className="page-container">
        <div className="page-header">
          <div>
            <h1>Automations</h1>
            <p className="text-muted">n8n workflows and integrations powering Surya OS</p>
          </div>
          <button className="btn btn-primary" onClick={() => om('m-automation')}>
            <Zap size={18} />
            New Automation
          </button>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 24 }}>
          <div className="card" style={{ padding: 16, textAlign: 'center' }}>
            <Zap size={24} style={{ color: 'var(--sun)', marginBottom: 8 }} />
            <div style={{ fontSize: 28, fontWeight: 800 }}>{flowStats.total}</div>
            <div style={{ fontSize: 12, color: 'var(--muted)' }}>Total Flows</div>
          </div>
          <div className="card" style={{ padding: 16, textAlign: 'center' }}>
            <CheckCircle size={24} style={{ color: '#00D68F', marginBottom: 8 }} />
            <div style={{ fontSize: 28, fontWeight: 800, color: '#00D68F' }}>{flowStats.live}</div>
            <div style={{ fontSize: 12, color: 'var(--muted)' }}>Live</div>
          </div>
          <div className="card" style={{ padding: 16, textAlign: 'center' }}>
            <Settings size={24} style={{ color: '#FFB547', marginBottom: 8 }} />
            <div style={{ fontSize: 28, fontWeight: 800, color: '#FFB547' }}>{flowStats.building}</div>
            <div style={{ fontSize: 12, color: 'var(--muted)' }}>Building</div>
          </div>
          <div className="card" style={{ padding: 16, textAlign: 'center' }}>
            <Activity size={24} style={{ color: 'var(--flare)', marginBottom: 8 }} />
            <div style={{ fontSize: 28, fontWeight: 800 }}>{flowStats.totalRuns}</div>
            <div style={{ fontSize: 12, color: 'var(--muted)' }}>Total Runs</div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="tab-nav" style={{ marginBottom: 24 }}>
          {[
            { id: 'flows', label: 'n8n Workflows', icon: Zap },
            { id: 'notion', label: 'Notion Pages', icon: FileText },
            { id: 'integrations', label: 'Integrations', icon: Link }
          ].map(tab => (
            <button
              key={tab.id}
              className={`tab-btn ${autoTab === tab.id ? 'active' : ''}`}
              onClick={() => setAutoTab(tab.id)}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Flows Tab */}
        {autoTab === 'flows' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {n8nFlows.map(flow => (
              <div key={flow.id} className="card" style={{ padding: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', gap: 16, flex: 1 }}>
                    <div style={{
                      width: 48, height: 48, borderRadius: 12,
                      background: `${statusColors[flow.st]}20`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      <Zap size={24} style={{ color: statusColors[flow.st] }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                        <h3 style={{ margin: 0, fontSize: 16 }}>{flow.name}</h3>
                        <span style={{
                          padding: '2px 8px', borderRadius: 4, fontSize: 11, fontWeight: 600,
                          background: `${statusColors[flow.st]}20`, color: statusColors[flow.st]
                        }}>
                          {statusLabels[flow.st]}
                        </span>
                      </div>
                      <div style={{ display: 'flex', gap: 16, marginTop: 8, fontSize: 13, color: 'var(--muted)' }}>
                        <span><strong>Trigger:</strong> {flow.trigger}</span>
                        <span><strong>Action:</strong> {flow.action}</span>
                      </div>
                      {flow.webhook && (
                        <div style={{ marginTop: 8, padding: 8, background: 'var(--bg-alt)', borderRadius: 6, fontFamily: 'monospace', fontSize: 11 }}>
                          {flow.webhook}
                        </div>
                      )}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 20, fontWeight: 700 }}>{flow.runs}</div>
                    <div style={{ fontSize: 11, color: 'var(--muted)' }}>runs</div>
                    {flow.lastRun && (
                      <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 4 }}>
                        Last: {new Date(flow.lastRun).toLocaleDateString('en-IN')}
                      </div>
                    )}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
                  {flow.st !== 'live' && (
                    <button className="btn btn-sm btn-green" onClick={() => {
                      setN8nFlows(prev => prev.map(f => f.id === flow.id ? { ...f, st: 'live' } : f));
                      toast(`${flow.name} is now live!`, 'success');
                    }}>
                      <Play size={14} /> Activate
                    </button>
                  )}
                  {flow.st === 'live' && (
                    <button className="btn btn-sm" onClick={() => {
                      setN8nFlows(prev => prev.map(f => f.id === flow.id ? { ...f, st: 'building' } : f));
                      toast(`${flow.name} paused`, 'info');
                    }}>
                      <Pause size={14} /> Pause
                    </button>
                  )}
                  <button className="btn btn-sm btn-ghost" onClick={() => om('m-automation', flow)}>
                    <Edit3 size={14} /> Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Notion Pages Tab */}
        {autoTab === 'notion' && (
          <div className="grid-2">
            {notionPages.map(page => (
              <div key={page.id} className="card" style={{ padding: 20 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 8,
                    background: 'rgba(255,140,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <FileText size={20} style={{ color: 'var(--sun)' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ margin: 0, fontSize: 15 }}>{page.title}</h3>
                    <span className="tag" style={{ marginTop: 4 }}>{page.cat}</span>
                  </div>
                </div>
                <p style={{ margin: '12px 0', fontSize: 13, color: 'var(--muted)' }}>{page.notes}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 11, color: 'var(--muted)' }}>
                    Updated: {new Date(page.updated).toLocaleDateString('en-IN')}
                  </span>
                  <a href={page.url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-ghost">
                    <ExternalLink size={14} /> Open
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Integrations Tab */}
        {autoTab === 'integrations' && (
          <div className="grid-3">
            {[
              { name: 'n8n', desc: 'Workflow automation', status: 'connected', icon: Zap, color: '#FF6D5A' },
              { name: 'Notion', desc: 'Documentation', status: 'connected', icon: FileText, color: '#000' },
              { name: 'WhatsApp Business', desc: 'Customer messaging', status: 'pending', icon: MessageCircle, color: '#25D366' },
              { name: 'Google Sheets', desc: 'Data sync', status: 'connected', icon: Table, color: '#34A853' },
              { name: 'Razorpay', desc: 'Payments', status: 'planned', icon: CreditCard, color: '#072654' },
              { name: 'Zoho CRM', desc: 'CRM sync', status: 'planned', icon: Users, color: '#E42527' }
            ].map((int, idx) => (
              <div key={idx} className="card" style={{ padding: 20, textAlign: 'center' }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 12, margin: '0 auto 12px',
                  background: `${int.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  <int.icon size={28} style={{ color: int.color }} />
                </div>
                <h3 style={{ margin: '0 0 4px', fontSize: 15 }}>{int.name}</h3>
                <p style={{ margin: '0 0 12px', fontSize: 12, color: 'var(--muted)' }}>{int.desc}</p>
                <span style={{
                  padding: '4px 12px', borderRadius: 12, fontSize: 11, fontWeight: 600,
                  background: int.status === 'connected' ? 'rgba(0,214,143,0.2)' : 
                              int.status === 'pending' ? 'rgba(255,181,71,0.2)' : 'rgba(107,114,128,0.2)',
                  color: int.status === 'connected' ? '#00D68F' : 
                         int.status === 'pending' ? '#FFB547' : '#6B7280'
                }}>
                  {int.status === 'connected' ? '● Connected' : int.status === 'pending' ? '◐ Pending' : '○ Planned'}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // RENDER: ADMIN
  // ═══════════════════════════════════════════════════════════════════════════
  const renderAdmin = () => {
    const systemStats = {
      users: Object.keys(users).length,
      activeUsers: Object.values(users).filter(u => u.active).length,
      leads: leads.length,
      ideas: ideas.length,
      tasks: tasks.length,
      projects: projects.length,
      logEntries: log.length
    };

    const rolePermissions = {
      owner: ['all'],
      manager: ['crm', 'followups', 'tasks', 'projects', 'ideas', 'messages', 'marketing'],
      member: ['home', 'tasks', 'ideas', 'messages', 'profile'],
      mentor: ['home', 'ideas', 'ceo-board', 'messages', 'profile']
    };

    return (
      <div className="page-container">
        <div className="page-header">
          <div>
            <h1>Admin Panel</h1>
            <p className="text-muted">System configuration and access management</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="tab-nav" style={{ marginBottom: 24 }}>
          {[
            { id: 'overview', label: 'Overview', icon: LayoutDashboard },
            { id: 'access', label: 'Access Control', icon: Shield },
            { id: 'audit', label: 'Audit Log', icon: FileText },
            { id: 'settings', label: 'Settings', icon: Settings },
            { id: 'system', label: 'System Status', icon: Activity }
          ].map(tab => (
            <button
              key={tab.id}
              className={`tab-btn ${adminTab === tab.id ? 'active' : ''}`}
              onClick={() => setAdminTab(tab.id)}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {adminTab === 'overview' && (
          <>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 24 }}>
              {[
                { label: 'Total Users', value: systemStats.users, icon: Users, color: '#FF8C00' },
                { label: 'Active Users', value: systemStats.activeUsers, icon: UserCheck, color: '#00D68F' },
                { label: 'Total Leads', value: systemStats.leads, icon: Target, color: '#FFB547' },
                { label: 'Log Entries', value: systemStats.logEntries, icon: Activity, color: '#8B5CF6' }
              ].map((stat, idx) => (
                <div key={idx} className="card" style={{ padding: 20, textAlign: 'center' }}>
                  <stat.icon size={28} style={{ color: stat.color, marginBottom: 8 }} />
                  <div style={{ fontSize: 32, fontWeight: 800, color: stat.color }}>{stat.value}</div>
                  <div style={{ fontSize: 13, color: 'var(--muted)' }}>{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid-2">
              <div className="card" style={{ padding: 24 }}>
                <h3 style={{ marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <PieChart size={20} />
                  Data Summary
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    { label: 'Leads', count: systemStats.leads },
                    { label: 'Ideas', count: systemStats.ideas },
                    { label: 'Tasks', count: systemStats.tasks },
                    { label: 'Projects', count: systemStats.projects }
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: 8, background: 'var(--bg-alt)', borderRadius: 6 }}>
                      <span>{item.label}</span>
                      <strong>{item.count}</strong>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card" style={{ padding: 24 }}>
                <h3 style={{ marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Clock size={20} />
                  Recent Activity
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {log.slice(-5).reverse().map((entry, idx) => (
                    <div key={idx} style={{ fontSize: 13, padding: 8, background: 'var(--bg-alt)', borderRadius: 6 }}>
                      <span style={{ color: 'var(--muted)' }}>
                        {new Date(entry.ts).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
                      </span>
                      {' — '}{entry.action}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {/* Access Control Tab */}
        {adminTab === 'access' && (
          <div className="card" style={{ padding: 24 }}>
            <h3 style={{ marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
              <Shield size={20} />
              Role Permissions Matrix
            </h3>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border)' }}>
                  <th style={{ textAlign: 'left', padding: 12, color: 'var(--muted)' }}>Role</th>
                  <th style={{ textAlign: 'left', padding: 12, color: 'var(--muted)' }}>Permissions</th>
                  <th style={{ textAlign: 'center', padding: 12, color: 'var(--muted)' }}>Users</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(rolePermissions).map(([role, perms]) => {
                  const roleUsers = Object.entries(users).filter(([_, u]) => u.role === role);
                  return (
                    <tr key={role} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td style={{ padding: 12 }}>
                        <span style={{
                          padding: '4px 12px', borderRadius: 6, fontSize: 13, fontWeight: 600,
                          background: role === 'owner' ? 'rgba(255,140,0,0.2)' : 
                                      role === 'manager' ? 'rgba(0,214,143,0.2)' : 
                                      role === 'mentor' ? 'rgba(139,92,246,0.2)' : 'rgba(107,114,128,0.2)',
                          color: role === 'owner' ? '#FF8C00' : 
                                 role === 'manager' ? '#00D68F' : 
                                 role === 'mentor' ? '#8B5CF6' : '#6B7280'
                        }}>
                          {role.charAt(0).toUpperCase() + role.slice(1)}
                        </span>
                      </td>
                      <td style={{ padding: 12 }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                          {perms.map(p => (
                            <span key={p} className="tag" style={{ fontSize: 11 }}>{p}</span>
                          ))}
                        </div>
                      </td>
                      <td style={{ padding: 12, textAlign: 'center' }}>
                        <span style={{ fontWeight: 700 }}>{roleUsers.length}</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* Audit Log Tab */}
        {adminTab === 'audit' && (
          <div className="card" style={{ padding: 24 }}>
            <h3 style={{ marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
              <FileText size={20} />
              System Audit Log
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxHeight: 500, overflowY: 'auto' }}>
              {log.slice().reverse().map((entry, idx) => {
                const entryUser = Object.entries(users).find(([id]) => id === entry.uid)?.[1];
                return (
                  <div key={idx} style={{
                    display: 'flex', alignItems: 'center', gap: 12, padding: 12,
                    background: 'var(--bg-alt)', borderRadius: 8
                  }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: '50%',
                      background: entryUser?.col || 'var(--sun)', color: '#000',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 11, fontWeight: 700
                    }}>
                      {entryUser?.av || '?'}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: 13 }}>{entryUser?.name || 'System'}</div>
                      <div style={{ fontSize: 12, color: 'var(--muted)' }}>{entry.action}</div>
                    </div>
                    <div style={{ fontSize: 11, color: 'var(--muted)' }}>
                      {new Date(entry.ts).toLocaleString('en-IN', { dateStyle: 'short', timeStyle: 'short' })}
                    </div>
                  </div>
                );
              })}
              {log.length === 0 && (
                <div className="empty-state">
                  <FileText size={40} />
                  <p>No audit logs yet</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {adminTab === 'settings' && (
          <div className="grid-2">
            <div className="card" style={{ padding: 24 }}>
              <h3 style={{ marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                <Database size={20} />
                Data Management
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <button className="btn btn-ghost" onClick={exportData} style={{ justifyContent: 'flex-start' }}>
                  <Download size={18} /> Export All Data (JSON)
                </button>
                <button className="btn btn-ghost" style={{ justifyContent: 'flex-start' }}>
                  <Upload size={18} /> Import Data
                </button>
                <button className="btn btn-ghost" style={{ justifyContent: 'flex-start', color: 'var(--red)' }}>
                  <Trash2 size={18} /> Clear All Logs
                </button>
              </div>
            </div>

            <div className="card" style={{ padding: 24 }}>
              <h3 style={{ marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                <Key size={20} />
                API Configuration
              </h3>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', marginBottom: 6, color: 'var(--muted)', fontSize: 13 }}>Claude API Key</label>
                <div style={{ display: 'flex', gap: 8 }}>
                  <input type="password" value={apiKey ? '••••••••••••' : ''} readOnly style={{ flex: 1 }} />
                  <button className="btn btn-sm" onClick={() => om('m-api')}>
                    <Edit3 size={14} />
                  </button>
                </div>
              </div>
              <div style={{
                padding: 12, borderRadius: 8, background: apiKey ? 'rgba(0,214,143,0.1)' : 'rgba(239,68,68,0.1)',
                border: `1px solid ${apiKey ? 'rgba(0,214,143,0.3)' : 'rgba(239,68,68,0.3)'}`
              }}>
                <span style={{ color: apiKey ? '#00D68F' : '#EF4444', fontWeight: 600, fontSize: 13 }}>
                  {apiKey ? '✓ API Key Configured' : '✗ No API Key Set'}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* System Status Tab */}
        {adminTab === 'system' && (
          <div className="card" style={{ padding: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <h3 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: 8 }}>
                <Activity size={20} />
                Live System Diagnostics
              </h3>
              <button className="btn btn-sm btn-ghost" onClick={fetchSystemDiagnostics} disabled={systemDiagLoading}>
                {systemDiagLoading ? <span className="spinner" /> : <RefreshCw size={14} />}
                Refresh
              </button>
            </div>

            {systemDiagError && (
              <div style={{ marginBottom: 12, padding: 10, borderRadius: 8, background: 'rgba(239,68,68,0.12)', color: '#EF4444', fontSize: 13 }}>
                {systemDiagError}
              </div>
            )}

            {!systemDiag && !systemDiagLoading && !systemDiagError && (
              <div style={{ color: 'var(--tx2)', fontSize: 13 }}>No diagnostics loaded yet.</div>
            )}

            {systemDiag && (
              <>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 16 }}>
                  <div className="card" style={{ padding: 12 }}>
                    <div style={{ fontSize: 11, color: 'var(--tx3)' }}>Persistence</div>
                    <div style={{ marginTop: 4, fontWeight: 700 }}>{systemDiag.persistence || 'unknown'}</div>
                  </div>
                  <div className="card" style={{ padding: 12 }}>
                    <div style={{ fontSize: 11, color: 'var(--tx3)' }}>SSE Clients</div>
                    <div style={{ marginTop: 4, fontWeight: 700 }}>{systemDiag.sseClients ?? 0}</div>
                  </div>
                  <div className="card" style={{ padding: 12 }}>
                    <div style={{ fontSize: 11, color: 'var(--tx3)' }}>Normalized Ready</div>
                    <div style={{ marginTop: 4, fontWeight: 700, color: systemDiag.normalized?.ready ? '#00D68F' : '#EF4444' }}>
                      {systemDiag.normalized?.ready ? 'Yes' : 'No'}
                    </div>
                  </div>
                  <div className="card" style={{ padding: 12 }}>
                    <div style={{ fontSize: 11, color: 'var(--tx3)' }}>Last Mirror</div>
                    <div style={{ marginTop: 4, fontWeight: 700, color: systemDiag.normalized?.lastMirrorStatus?.ok ? '#00D68F' : '#FFB547' }}>
                      {systemDiag.normalized?.lastMirrorStatus?.ok === null ? 'N/A' : (systemDiag.normalized?.lastMirrorStatus?.ok ? 'OK' : 'Failed')}
                    </div>
                  </div>
                </div>

                <div style={{ marginBottom: 12, fontSize: 12, color: 'var(--tx2)' }}>
                  Started: {systemDiag.startedAt ? new Date(systemDiag.startedAt).toLocaleString('en-IN') : 'N/A'}
                </div>

                <div style={{ maxHeight: 320, overflowY: 'auto', border: '1px solid var(--border)', borderRadius: 10 }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr>
                        <th style={{ textAlign: 'left', padding: 10 }}>Table</th>
                        <th style={{ textAlign: 'left', padding: 10 }}>Status</th>
                        <th style={{ textAlign: 'left', padding: 10 }}>Error</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(systemDiag.normalized?.tables || []).map((row) => (
                        <tr key={row.table} style={{ borderTop: '1px solid var(--border)' }}>
                          <td style={{ padding: 10, fontSize: 13 }}>{row.table}</td>
                          <td style={{ padding: 10, fontSize: 13, color: row.ok ? '#00D68F' : '#EF4444' }}>
                            {row.ok ? 'OK' : 'Missing'}
                          </td>
                          <td style={{ padding: 10, fontSize: 12, color: 'var(--tx2)' }}>{row.error || '-'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    );
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // RENDER: PEOPLE
  // ═══════════════════════════════════════════════════════════════════════════
  const renderPeople = () => {
    const userList = Object.entries(users);
    const roleColors = {
      owner: { bg: 'rgba(255,140,0,0.2)', color: '#FF8C00' },
      manager: { bg: 'rgba(0,214,143,0.2)', color: '#00D68F' },
      member: { bg: 'rgba(107,114,128,0.2)', color: '#6B7280' },
      mentor: { bg: 'rgba(139,92,246,0.2)', color: '#8B5CF6' }
    };

    return (
      <div className="page-container">
        <div className="page-header">
          <div>
            <h1>People</h1>
            <p className="text-muted">Manage team members and access</p>
          </div>
          <button className="btn btn-primary" onClick={() => om('m-user')}>
            <UserPlus size={18} />
            Add Member
          </button>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 24 }}>
          <div className="card" style={{ padding: 16, textAlign: 'center' }}>
            <Users size={24} style={{ color: 'var(--sun)', marginBottom: 8 }} />
            <div style={{ fontSize: 28, fontWeight: 800 }}>{userList.length}</div>
            <div style={{ fontSize: 12, color: 'var(--muted)' }}>Total Members</div>
          </div>
          <div className="card" style={{ padding: 16, textAlign: 'center' }}>
            <Crown size={24} style={{ color: '#FF8C00', marginBottom: 8 }} />
            <div style={{ fontSize: 28, fontWeight: 800 }}>{userList.filter(([_, u]) => u.role === 'owner').length}</div>
            <div style={{ fontSize: 12, color: 'var(--muted)' }}>Owners</div>
          </div>
          <div className="card" style={{ padding: 16, textAlign: 'center' }}>
            <Shield size={24} style={{ color: '#00D68F', marginBottom: 8 }} />
            <div style={{ fontSize: 28, fontWeight: 800 }}>{userList.filter(([_, u]) => u.role === 'manager').length}</div>
            <div style={{ fontSize: 12, color: 'var(--muted)' }}>Managers</div>
          </div>
          <div className="card" style={{ padding: 16, textAlign: 'center' }}>
            <Brain size={24} style={{ color: '#8B5CF6', marginBottom: 8 }} />
            <div style={{ fontSize: 28, fontWeight: 800 }}>{userList.filter(([_, u]) => u.role === 'mentor').length}</div>
            <div style={{ fontSize: 12, color: 'var(--muted)' }}>Mentors</div>
          </div>
        </div>

        {/* User Grid */}
        <div className="grid-2">
          {userList.map(([userId, userData]) => (
            <div key={userId} className="card" style={{ padding: 20 }}>
              <div style={{ display: 'flex', gap: 16 }}>
                <div style={{
                  width: 64, height: 64, borderRadius: '50%',
                  background: userData.col || 'var(--sun)', color: '#000',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 20, fontWeight: 700
                }}>
                  {userData.av}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <h3 style={{ margin: 0, fontSize: 16 }}>{userData.name}</h3>
                    {!userData.active && (
                      <span style={{ padding: '2px 6px', borderRadius: 4, fontSize: 10, background: 'rgba(239,68,68,0.2)', color: '#EF4444' }}>
                        Inactive
                      </span>
                    )}
                  </div>
                  <span style={{
                    padding: '2px 8px', borderRadius: 4, fontSize: 11, fontWeight: 600,
                    background: roleColors[userData.role]?.bg, color: roleColors[userData.role]?.color
                  }}>
                    {userData.role.charAt(0).toUpperCase() + userData.role.slice(1)}
                  </span>
                  <p style={{ margin: '8px 0 0', fontSize: 13, color: 'var(--muted)' }}>{userData.dept}</p>
                </div>
              </div>
              
              <div style={{ marginTop: 16, padding: 12, background: 'var(--bg-alt)', borderRadius: 8 }}>
                <p style={{ margin: 0, fontSize: 13, fontStyle: 'italic', color: 'var(--muted)' }}>
                  "{userData.bio}"
                </p>
                {isCEO && (
                  <p style={{ margin: '8px 0 0', fontSize: 12, color: 'var(--tx2)' }}>
                    Password: <span style={{ color: 'var(--sun)', fontWeight: 600 }}>{_isHashedPassword(userData.pass) ? 'Hidden (secure hash)' : (_decLegacy(userData.pass) || 'Not set')}</span>
                  </p>
                )}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginTop: 16 }}>
                <div style={{ textAlign: 'center', padding: 8, background: 'var(--bg-alt)', borderRadius: 6 }}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--sun)' }}>{userData.totalLogins || 0}</div>
                  <div style={{ fontSize: 10, color: 'var(--muted)' }}>Logins</div>
                </div>
                <div style={{ textAlign: 'center', padding: 8, background: 'var(--bg-alt)', borderRadius: 6 }}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--green)' }}>
                    {tasks.filter(t => t.ow === userId && t.done).length}
                  </div>
                  <div style={{ fontSize: 10, color: 'var(--muted)' }}>Tasks Done</div>
                </div>
                <div style={{ textAlign: 'center', padding: 8, background: 'var(--bg-alt)', borderRadius: 6 }}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--flare)' }}>
                    {ideas.filter(i => i.user === userId).length}
                  </div>
                  <div style={{ fontSize: 10, color: 'var(--muted)' }}>Ideas</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
                <button className="btn btn-sm btn-ghost" onClick={() => om('m-user', { id: userId, ...userData })}>
                  <Edit3 size={14} /> Edit
                </button>
                {userId !== user && (
                  <button 
                    className="btn btn-sm btn-ghost" 
                    onClick={() => {
                      setUsers(prev => ({ ...prev, [userId]: { ...prev[userId], active: !userData.active } }));
                      toast(`User ${userData.active ? 'deactivated' : 'activated'}`, 'info');
                    }}
                    style={{ color: userData.active ? 'var(--red)' : 'var(--green)' }}
                  >
                    {userData.active ? <UserX size={14} /> : <UserCheck size={14} />}
                    {userData.active ? 'Deactivate' : 'Activate'}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // RENDER: DEPARTMENTS
  // ═══════════════════════════════════════════════════════════════════════════
  const renderDepartments = () => {
    return (
      <div className="page-container">
        <div className="page-header">
          <div>
            <h1>Departments</h1>
            <p className="text-muted">Organizational structure and team distribution</p>
          </div>
          <button className="btn btn-primary" onClick={() => om('m-dept')}>
            <Building2 size={18} />
            Add Department
          </button>
        </div>

        {/* Department Cards */}
        <div className="grid-2">
          {depts.map(dept => {
            const deptUsers = Object.entries(users).filter(([_, u]) => u.dept === dept.name);
            const deptTasks = tasks.filter(t => t.dept === dept.name);
            const deptProjects = projects.filter(p => p.cat === dept.name || p.own === dept.head);
            const headUser = Object.entries(users).find(([id]) => id === dept.head)?.[1];
            
            return (
              <div key={dept.id} className="card" style={{ padding: 24 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                  <div style={{ display: 'flex', gap: 16 }}>
                    <div style={{
                      width: 56, height: 56, borderRadius: 12,
                      background: 'linear-gradient(135deg, rgba(255,140,0,0.2), rgba(255,75,43,0.2))',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 28
                    }}>
                      {dept.emoji}
                    </div>
                    <div>
                      <h3 style={{ margin: '0 0 4px', fontSize: 18 }}>{dept.name}</h3>
                      <p style={{ margin: 0, fontSize: 13, color: 'var(--muted)' }}>{dept.desc}</p>
                    </div>
                  </div>
                  <button className="btn btn-sm btn-ghost" onClick={() => om('m-dept', dept)}>
                    <Edit3 size={14} />
                  </button>
                </div>

                {/* Department Head */}
                {headUser && (
                  <div style={{
                    padding: 12, borderRadius: 8, marginBottom: 16,
                    background: 'rgba(255,140,0,0.1)', border: '1px solid rgba(255,140,0,0.2)'
                  }}>
                    <div style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 6 }}>DEPARTMENT HEAD</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{
                        width: 28, height: 28, borderRadius: '50%',
                        background: headUser.col, color: '#000',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 10, fontWeight: 700
                      }}>
                        {headUser.av}
                      </div>
                      <span style={{ fontWeight: 600 }}>{headUser.name}</span>
                    </div>
                  </div>
                )}

                {/* Team Members */}
                <div style={{ marginBottom: 16 }}>
                  <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 8 }}>Team Members ({deptUsers.length})</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {deptUsers.map(([id, u]) => (
                      <div key={id} style={{
                        padding: '4px 10px', borderRadius: 12, background: 'var(--bg-alt)',
                        fontSize: 12, display: 'flex', alignItems: 'center', gap: 6
                      }}>
                        <div style={{
                          width: 18, height: 18, borderRadius: '50%', background: u.col, color: '#000',
                          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, fontWeight: 700
                        }}>{u.av}</div>
                        {u.name.split(' ')[0]}
                      </div>
                    ))}
                    {deptUsers.length === 0 && <span style={{ fontSize: 12, color: 'var(--muted)' }}>No members yet</span>}
                  </div>
                </div>

                {/* Stats */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
                  <div style={{ textAlign: 'center', padding: 12, background: 'var(--bg-alt)', borderRadius: 8 }}>
                    <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--sun)' }}>{deptUsers.length}</div>
                    <div style={{ fontSize: 11, color: 'var(--muted)' }}>Members</div>
                  </div>
                  <div style={{ textAlign: 'center', padding: 12, background: 'var(--bg-alt)', borderRadius: 8 }}>
                    <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--green)' }}>{deptTasks.filter(t => t.done).length}/{deptTasks.length}</div>
                    <div style={{ fontSize: 11, color: 'var(--muted)' }}>Tasks</div>
                  </div>
                  <div style={{ textAlign: 'center', padding: 12, background: 'var(--bg-alt)', borderRadius: 8 }}>
                    <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--flare)' }}>{deptProjects.length}</div>
                    <div style={{ fontSize: 11, color: 'var(--muted)' }}>Projects</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Org Chart */}
        <div className="card" style={{ padding: 24, marginTop: 24 }}>
          <h3 style={{ marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
            <GitBranch size={20} />
            Organization Chart
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* CEO */}
            <div style={{
              padding: '12px 24px', borderRadius: 8, background: 'linear-gradient(135deg, var(--sun), var(--flare))',
              color: '#000', fontWeight: 700, marginBottom: 24
            }}>
              {users.onkar?.name || 'CEO'} - Founder & CEO
            </div>
            
            {/* Connector */}
            <div style={{ width: 2, height: 24, background: 'var(--border)' }} />
            <div style={{ width: '60%', height: 2, background: 'var(--border)' }} />
            
            {/* Departments */}
            <div style={{ display: 'flex', gap: 16, marginTop: 24, flexWrap: 'wrap', justifyContent: 'center' }}>
              {depts.filter(d => d.name !== 'CEO Office').map(dept => {
                const head = Object.entries(users).find(([id]) => id === dept.head)?.[1];
                return (
                  <div key={dept.id} style={{
                    padding: 16, borderRadius: 8, background: 'var(--card)', border: '1px solid var(--border)',
                    textAlign: 'center', minWidth: 150
                  }}>
                    <div style={{ fontSize: 24, marginBottom: 8 }}>{dept.emoji}</div>
                    <div style={{ fontWeight: 600, marginBottom: 4 }}>{dept.name}</div>
                    <div style={{ fontSize: 12, color: 'var(--muted)' }}>{head?.name || 'TBD'}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // RENDER: TASKS
  // ═══════════════════════════════════════════════════════════════════════════
  const renderTasks = () => {
    const filteredTasks = tasks.filter(t => {
      if (taskFilter === 'mine') return t.ow === user;
      if (taskFilter === 'pending') return !t.done;
      if (taskFilter === 'done') return t.done;
      return true;
    }).sort((a, b) => {
      if (taskSort === 'due') return new Date(a.due) - new Date(b.due);
      if (taskSort === 'pri') {
        const priOrder = { high: 0, med: 1, low: 2 };
        return priOrder[a.pri] - priOrder[b.pri];
      }
      return 0;
    });

    const priColors = { high: '#EF4444', med: '#FFB547', low: '#6B7280' };

    return (
      <div className="page-container">
        <div className="page-header">
          <div>
            <h1>Tasks</h1>
            <p className="text-muted">{tasks.filter(t => !t.done).length} pending, {tasks.filter(t => t.done).length} completed</p>
          </div>
          <button className="btn btn-primary" onClick={() => om('m-task')}>
            <Plus size={18} />
            New Task
          </button>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
          <div className="tab-nav">
            {[
              { id: 'all', label: 'All' },
              { id: 'mine', label: 'My Tasks' },
              { id: 'pending', label: 'Pending' },
              { id: 'done', label: 'Completed' }
            ].map(f => (
              <button
                key={f.id}
                className={`tab-btn ${taskFilter === f.id ? 'active' : ''}`}
                onClick={() => setTaskFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
          <select className="select" value={taskSort} onChange={(e) => setTaskSort(e.target.value)} style={{ width: 150 }}>
            <option value="due">Sort by Due Date</option>
            <option value="pri">Sort by Priority</option>
          </select>
        </div>

        {/* Task List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {filteredTasks.map(task => {
            const owner = Object.entries(users).find(([id]) => id === task.ow)?.[1];
            const isOverdue = !task.done && new Date(task.due) < new Date();
            
            return (
              <div key={task.id} className="card" style={{
                padding: 16, display: 'flex', alignItems: 'center', gap: 16,
                opacity: task.done ? 0.6 : 1,
                borderLeft: `3px solid ${priColors[task.pri]}`
              }}>
                <button
                  onClick={() => setTasks(prev => prev.map(t => t.id === task.id ? { ...t, done: !t.done } : t))}
                  style={{
                    width: 24, height: 24, borderRadius: 6,
                    border: task.done ? 'none' : '2px solid var(--border)',
                    background: task.done ? 'var(--green)' : 'transparent',
                    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}
                >
                  {task.done && <Check size={14} style={{ color: '#000' }} />}
                </button>
                
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontWeight: 600, fontSize: 14,
                    textDecoration: task.done ? 'line-through' : 'none'
                  }}>
                    {task.name}
                  </div>
                  <div style={{ display: 'flex', gap: 12, marginTop: 4, fontSize: 12, color: 'var(--muted)' }}>
                    <span>{task.dept}</span>
                    {task.idea && <span>💡 From idea</span>}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{
                    padding: '2px 8px', borderRadius: 4, fontSize: 11, fontWeight: 600,
                    background: `${priColors[task.pri]}20`, color: priColors[task.pri]
                  }}>
                    {task.pri.toUpperCase()}
                  </span>
                  <span style={{
                    fontSize: 12, color: isOverdue ? '#EF4444' : 'var(--muted)',
                    fontWeight: isOverdue ? 600 : 400
                  }}>
                    {new Date(task.due).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                  </span>
                  <div style={{
                    width: 28, height: 28, borderRadius: '50%',
                    background: owner?.col || 'var(--sun)', color: '#000',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 10, fontWeight: 700
                  }}>
                    {owner?.av || '?'}
                  </div>
                  <button className="btn btn-sm btn-ghost" onClick={() => om('m-task', task)}>
                    <Edit3 size={14} />
                  </button>
                </div>
              </div>
            );
          })}
          {filteredTasks.length === 0 && (
            <div className="empty-state" style={{ padding: 40 }}>
              <CheckSquare size={40} />
              <p>No tasks found</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // RENDER: PROJECTS
  // ═══════════════════════════════════════════════════════════════════════════
  const renderProjects = () => {
    const filteredProjects = projects.filter(p => {
      if (projFilter === 'active') return p.st === 'active';
      if (projFilter === 'planning') return p.st === 'planning';
      if (projFilter === 'done') return p.st === 'done';
      return true;
    });

    const statusColors = { active: '#00D68F', planning: '#FFB547', done: '#8B5CF6', blocked: '#EF4444' };

    return (
      <div className="page-container">
        <div className="page-header">
          <div>
            <h1>Projects</h1>
            <p className="text-muted">{projects.filter(p => p.st === 'active').length} active projects</p>
          </div>
          <button className="btn btn-primary" onClick={() => om('m-project')}>
            <Plus size={18} />
            New Project
          </button>
        </div>

        {/* Filters */}
        <div className="tab-nav" style={{ marginBottom: 24 }}>
          {[
            { id: 'all', label: 'All' },
            { id: 'active', label: 'Active' },
            { id: 'planning', label: 'Planning' },
            { id: 'done', label: 'Completed' }
          ].map(f => (
            <button
              key={f.id}
              className={`tab-btn ${projFilter === f.id ? 'active' : ''}`}
              onClick={() => setProjFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid-2">
          {filteredProjects.map(project => {
            const owner = Object.entries(users).find(([id]) => id === project.own)?.[1];
            const daysLeft = Math.ceil((new Date(project.due) - new Date()) / (1000 * 60 * 60 * 24));
            
            return (
              <div key={project.id} className="card" style={{ padding: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                      <h3 style={{ margin: 0, fontSize: 16 }}>{project.name}</h3>
                      <span style={{
                        padding: '2px 8px', borderRadius: 4, fontSize: 11, fontWeight: 600,
                        background: `${statusColors[project.st]}20`, color: statusColors[project.st]
                      }}>
                        {project.st.charAt(0).toUpperCase() + project.st.slice(1)}
                      </span>
                    </div>
                    <span className="tag">{project.cat}</span>
                  </div>
                  <button className="btn btn-sm btn-ghost" onClick={() => om('m-project', project)}>
                    <Edit3 size={14} />
                  </button>
                </div>

                <p style={{ margin: '0 0 16px', fontSize: 13, color: 'var(--muted)' }}>{project.desc}</p>

                {/* Progress */}
                <div style={{ marginBottom: 16 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                    <span style={{ fontSize: 12, color: 'var(--muted)' }}>Progress</span>
                    <span style={{ fontSize: 12, fontWeight: 600 }}>{project.prog}%</span>
                  </div>
                  <div style={{ height: 8, background: 'var(--bg-alt)', borderRadius: 4, overflow: 'hidden' }}>
                    <div style={{
                      width: `${project.prog}%`, height: '100%',
                      background: 'linear-gradient(90deg, var(--sun), var(--flare))',
                      borderRadius: 4, transition: 'width 0.3s'
                    }} />
                  </div>
                </div>

                {project.block && (
                  <div style={{
                    padding: 8, borderRadius: 6, marginBottom: 12,
                    background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)',
                    fontSize: 12, color: '#EF4444'
                  }}>
                    ⚠️ {project.block}
                  </div>
                )}

                <div style={{
                  padding: 8, borderRadius: 6, marginBottom: 12,
                  background: 'rgba(0,214,143,0.1)', fontSize: 12, color: 'var(--green)'
                }}>
                  📈 {project.impact}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{
                      width: 28, height: 28, borderRadius: '50%',
                      background: owner?.col || 'var(--sun)', color: '#000',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 10, fontWeight: 700
                    }}>
                      {owner?.av || '?'}
                    </div>
                    <span style={{ fontSize: 12 }}>{owner?.name}</span>
                  </div>
                  <span style={{
                    fontSize: 12,
                    color: daysLeft < 0 ? '#EF4444' : daysLeft <= 7 ? '#FFB547' : 'var(--muted)'
                  }}>
                    {daysLeft < 0 ? `${Math.abs(daysLeft)}d overdue` : `${daysLeft}d left`}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // RENDER: PAGE CONTENT
  // ═══════════════════════════════════════════════════════════════════════════
  const renderPage = () => {
    switch (page) {
      case 'home':
        return renderHome();
      case 'crm':
        return renderCRM();
      case 'followups':
        return renderFollowups();
      case 'ideas':
        return renderIdeaFeed();
      case 'pipeline':
        return renderIdeaPipeline();
      case 'ceo-board':
        return renderCEOBoard();
      case 'pulse':
        return renderTeamPulse();
      case 'messages':
        return renderMessages();
      case 'aic':
        return renderAICDemo();
      case 'automations':
        return renderAutomations();
      case 'admin':
        return renderAdmin();
      case 'people':
        return renderPeople();
      case 'departments':
        return renderDepartments();
      case 'tasks':
        return renderTasks();
      case 'projects':
        return renderProjects();
      
      default:
        return (
          <div className="empty-state" style={{ minHeight: 400 }}>
            <Rocket />
            <h3>{page.charAt(0).toUpperCase() + page.slice(1)} Page</h3>
            <p>This module is being built. Check back soon!</p>
          </div>
        );
    }
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // RENDER: MODALS
  // ═══════════════════════════════════════════════════════════════════════════
  const renderModals = () => {
    if (!modal) return null;

    const handleSaveLead = () => {
      if (!leadForm.name || !leadForm.area) {
        toast('Name and area required', 'warning');
        return;
      }
      if (modalData?.id) {
        updateLead(modalData.id, leadForm);
      } else {
        addLead({ ...leadForm, val: Number(leadForm.val) || 0 });
      }
      cm();
    };

    const handleSaveFollowup = () => {
      if (!followupForm.lid || !followupForm.date) {
        toast('Select lead and date', 'warning');
        return;
      }
      addFollowup({ ...followupForm, done: false });
      cm();
    };

    const handleSaveCallNote = () => {
      if (!callNoteForm.lid || !callNoteForm.notes) {
        toast('Select lead and add notes', 'warning');
        return;
      }
      const newNote = {
        id: genId(),
        ...callNoteForm,
        time: new Date().toISOString(),
        by: user
      };
      setCallNotes(prev => [...prev, newNote]);
      addLog(user, 'call_note', `Logged call note`);
      toast('Call note saved!', 'success');
      cm();
    };

    return (
      <div className="modal-overlay" onClick={cm}>
        <div className="modal-card" onClick={e => e.stopPropagation()} style={{ width: ['m-lead', 'm-project', 'm-user'].includes(modal) ? 520 : 480 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <h2 style={{ fontSize: 18 }}>
              {modal === 'm-api' && 'API Settings'}
              {modal === 'm-lead' && (modalData?.id ? 'Edit Lead' : 'Add New Lead')}
              {modal === 'm-followup' && 'Schedule Follow-up'}
              {modal === 'm-callnote' && 'Log Call Note'}
              {modal === 'm-task' && (modalData?.id ? 'Edit Task' : 'New Task')}
              {modal === 'm-project' && (modalData?.id ? 'Edit Project' : 'New Project')}
              {modal === 'm-user' && (modalData?.id ? 'Edit Member' : 'Add Member')}
              {modal === 'm-dept' && (modalData?.id ? 'Edit Department' : 'Add Department')}
              {modal === 'm-automation' && (modalData?.id ? 'Edit Automation' : 'New Automation')}
            </h2>
            <button className="btn btn-ghost btn-icon" onClick={cm}>
              <X size={20} />
            </button>
          </div>

          {/* API Settings Modal */}
          {modal === 'm-api' && (
            <div>
              <label style={{ display: 'block', marginBottom: 8, color: 'var(--tx2)', fontSize: 13 }}>
                Claude API Key
              </label>
              <input
                className="input"
                type="password"
                placeholder="sk-ant-api..."
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
              />
              <p style={{ fontSize: 12, color: 'var(--tx3)', marginTop: 8 }}>
                Required for AI features. Get your key from console.anthropic.com
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
                <button className="btn btn-ghost" onClick={cm}>Cancel</button>
                <button className="btn btn-primary" onClick={() => { toast('API key saved!', 'success'); cm(); }}>
                  Save Key
                </button>
              </div>
            </div>
          )}

          {/* Lead Modal */}
          {modal === 'm-lead' && (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                <div>
                  <label style={{ display: 'block', marginBottom: 6, color: 'var(--tx2)', fontSize: 13 }}>Name *</label>
                  <input
                    className="input"
                    placeholder="Customer name"
                    value={leadForm.name}
                    onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: 6, color: 'var(--tx2)', fontSize: 13 }}>Area *</label>
                  <input
                    className="input"
                    placeholder="e.g., Kothrud, Hadapsar"
                    value={leadForm.area}
                    onChange={(e) => setLeadForm({ ...leadForm, area: e.target.value })}
                  />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 12 }}>
                <div>
                  <label style={{ display: 'block', marginBottom: 6, color: 'var(--tx2)', fontSize: 13 }}>System Size</label>
                  <select className="select" value={leadForm.size} onChange={(e) => setLeadForm({ ...leadForm, size: e.target.value })}>
                    <option value="1kW">1kW</option>
                    <option value="2kW">2kW</option>
                    <option value="3kW">3kW</option>
                    <option value="4kW">4kW</option>
                    <option value="5kW+">5kW+</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: 6, color: 'var(--tx2)', fontSize: 13 }}>Temperature</label>
                  <select className="select" value={leadForm.temp} onChange={(e) => setLeadForm({ ...leadForm, temp: e.target.value })}>
                    <option value="hot">🔥 Hot</option>
                    <option value="warm">☀️ Warm</option>
                    <option value="cold">❄️ Cold</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: 6, color: 'var(--tx2)', fontSize: 13 }}>Stage</label>
                  <select className="select" value={leadForm.stage} onChange={(e) => setLeadForm({ ...leadForm, stage: e.target.value })}>
                    <option value="new">New Lead</option>
                    <option value="contacted">Contacted</option>
                    <option value="site">Site Visit</option>
                    <option value="proposal">Proposal</option>
                    <option value="nego">Negotiation</option>
                    <option value="won">Won</option>
                  </select>
                </div>
              </div>
              <div style={{ marginBottom: 12 }}>
                <label style={{ display: 'block', marginBottom: 6, color: 'var(--tx2)', fontSize: 13 }}>Deal Value (₹)</label>
                <input
                  className="input"
                  type="number"
                  placeholder="e.g., 180000"
                  value={leadForm.val}
                  onChange={(e) => setLeadForm({ ...leadForm, val: e.target.value })}
                />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', marginBottom: 6, color: 'var(--tx2)', fontSize: 13 }}>Notes</label>
                <textarea
                  className="textarea"
                  placeholder="Customer details, requirements, observations..."
                  value={leadForm.notes}
                  onChange={(e) => setLeadForm({ ...leadForm, notes: e.target.value })}
                />
              </div>
              <div style={{ display: 'flex', gap: 12 }}>
                <button className="btn btn-ghost" onClick={cm}>Cancel</button>
                <button className="btn btn-primary" onClick={handleSaveLead}>
                  {modalData?.id ? 'Update Lead' : 'Add Lead'}
                </button>
              </div>
            </div>
          )}

          {/* Follow-up Modal */}
          {modal === 'm-followup' && (
            <div>
              <div style={{ marginBottom: 12 }}>
                <label style={{ display: 'block', marginBottom: 6, color: 'var(--tx2)', fontSize: 13 }}>Lead *</label>
                <select 
                  className="select" 
                  value={followupForm.lid} 
                  onChange={(e) => setFollowupForm({ ...followupForm, lid: e.target.value })}
                >
                  <option value="">Select Lead...</option>
                  {leads.map(l => (
                    <option key={l.id} value={l.id}>{l.name} ({l.area})</option>
                  ))}
                </select>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                <div>
                  <label style={{ display: 'block', marginBottom: 6, color: 'var(--tx2)', fontSize: 13 }}>Date *</label>
                  <input
                    className="input"
                    type="date"
                    value={followupForm.date}
                    onChange={(e) => setFollowupForm({ ...followupForm, date: e.target.value })}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: 6, color: 'var(--tx2)', fontSize: 13 }}>Type</label>
                  <select className="select" value={followupForm.type} onChange={(e) => setFollowupForm({ ...followupForm, type: e.target.value })}>
                    <option value="call">📞 Call</option>
                    <option value="whatsapp">💬 WhatsApp</option>
                    <option value="visit">🏠 Visit</option>
                    <option value="proposal">📄 Proposal</option>
                    <option value="email">✉️ Email</option>
                  </select>
                </div>
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', marginBottom: 6, color: 'var(--tx2)', fontSize: 13 }}>Note</label>
                <textarea
                  className="textarea"
                  placeholder="What needs to be done?"
                  value={followupForm.note}
                  onChange={(e) => setFollowupForm({ ...followupForm, note: e.target.value })}
                />
              </div>
              <div style={{ display: 'flex', gap: 12 }}>
                <button className="btn btn-ghost" onClick={cm}>Cancel</button>
                <button className="btn btn-primary" onClick={handleSaveFollowup}>Schedule Follow-up</button>
              </div>
            </div>
          )}

          {/* Call Note Modal */}
          {modal === 'm-callnote' && (
            <div>
              <div style={{ marginBottom: 12 }}>
                <label style={{ display: 'block', marginBottom: 6, color: 'var(--tx2)', fontSize: 13 }}>Lead *</label>
                <select 
                  className="select" 
                  value={callNoteForm.lid} 
                  onChange={(e) => setCallNoteForm({ ...callNoteForm, lid: e.target.value })}
                >
                  <option value="">Select Lead...</option>
                  {leads.map(l => (
                    <option key={l.id} value={l.id}>{l.name} ({l.area})</option>
                  ))}
                </select>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                <div>
                  <label style={{ display: 'block', marginBottom: 6, color: 'var(--tx2)', fontSize: 13 }}>Outcome</label>
                  <select className="select" value={callNoteForm.outcome} onChange={(e) => setCallNoteForm({ ...callNoteForm, outcome: e.target.value })}>
                    <option value="positive">✅ Positive</option>
                    <option value="neutral">➖ Neutral</option>
                    <option value="negative">❌ Negative</option>
                    <option value="no_answer">📵 No Answer</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: 6, color: 'var(--tx2)', fontSize: 13 }}>Next Follow-up</label>
                  <input
                    className="input"
                    type="date"
                    value={callNoteForm.nextDate}
                    onChange={(e) => setCallNoteForm({ ...callNoteForm, nextDate: e.target.value })}
                  />
                </div>
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', marginBottom: 6, color: 'var(--tx2)', fontSize: 13 }}>Notes *</label>
                <textarea
                  className="textarea"
                  placeholder="What was discussed? Key points, objections, next steps..."
                  value={callNoteForm.notes}
                  onChange={(e) => setCallNoteForm({ ...callNoteForm, notes: e.target.value })}
                />
              </div>
              <div style={{ display: 'flex', gap: 12 }}>
                <button className="btn btn-ghost" onClick={cm}>Cancel</button>
                <button className="btn btn-green" onClick={handleSaveCallNote}>
                  <FileText size={16} /> Save Call Note
                </button>
              </div>
            </div>
          )}

          {/* Task Modal */}
          {modal === 'm-task' && (
            <div>
              <div style={{ marginBottom: 12 }}>
                <label style={{ display: 'block', marginBottom: 6, color: 'var(--tx2)', fontSize: 13 }}>Task Name *</label>
                <input
                  className="input"
                  placeholder="What needs to be done?"
                  value={taskForm.name}
                  onChange={(e) => setTaskForm({ ...taskForm, name: e.target.value })}
                />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                <div>
                  <label style={{ display: 'block', marginBottom: 6, color: 'var(--tx2)', fontSize: 13 }}>Assignee</label>
                  <select className="select" value={taskForm.ow} onChange={(e) => setTaskForm({ ...taskForm, ow: e.target.value })}>
                    <option value="">Select...</option>
                    {Object.entries(users).map(([id, u]) => (
                      <option key={id} value={id}>{u.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: 6, color: 'var(--tx2)', fontSize: 13 }}>Department</label>
                  <select className="select" value={taskForm.dept} onChange={(e) => setTaskForm({ ...taskForm, dept: e.target.value })}>
                    <option value="">Select...</option>
                    {depts.map(d => (
                      <option key={d.id} value={d.name}>{d.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }}>
                <div>
                  <label style={{ display: 'block', marginBottom: 6, color: 'var(--tx2)', fontSize: 13 }}>Priority</label>
                  <select className="select" value={taskForm.pri} onChange={(e) => setTaskForm({ ...taskForm, pri: e.target.value })}>
                    <option value="high">🔴 High</option>
                    <option value="med">🟡 Medium</option>
                    <option value="low">⚪ Low</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: 6, color: 'var(--tx2)', fontSize: 13 }}>Due Date</label>
                  <input
                    className="input"
                    type="date"
                    value={taskForm.due}
                    onChange={(e) => setTaskForm({ ...taskForm, due: e.target.value })}
                  />
                </div>
              </div>
              <div style={{ display: 'flex', gap: 12 }}>
                <button className="btn btn-ghost" onClick={cm}>Cancel</button>
                <button className="btn btn-primary" onClick={() => {
                  if (!taskForm.name) { toast('Task name required', 'warning'); return; }
                  if (modalData?.id) {
                    setTasks(prev => prev.map(t => t.id === modalData.id ? { ...t, ...taskForm } : t));
                    toast('Task updated!', 'success');
                  } else {
                    setTasks(prev => [...prev, { id: genId(), ...taskForm, done: false }]);
                    toast('Task created!', 'success');
                    addLog(user, 'create_task', `Created task: ${taskForm.name}`);
                  }
                  cm();
                }}>
                  {modalData?.id ? 'Update Task' : 'Create Task'}
                </button>
              </div>
            </div>
          )}

          {/* Project Modal */}
          {modal === 'm-project' && (
            <div>
              <div style={{ marginBottom: 12 }}>
                <label style={{ display: 'block', marginBottom: 6, color: 'var(--tx2)', fontSize: 13 }}>Project Name *</label>
                <input
                  className="input"
                  placeholder="Project name"
                  value={projectForm.name}
                  onChange={(e) => setProjectForm({ ...projectForm, name: e.target.value })}
                />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                <div>
                  <label style={{ display: 'block', marginBottom: 6, color: 'var(--tx2)', fontSize: 13 }}>Category</label>
                  <select className="select" value={projectForm.cat} onChange={(e) => setProjectForm({ ...projectForm, cat: e.target.value })}>
                    <option value="">Select...</option>
                    <option value="Product">Product</option>
                    <option value="Tech">Tech</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Sales">Sales</option>
                    <option value="Operations">Operations</option>
                    <option value="Business">Business</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: 6, color: 'var(--tx2)', fontSize: 13 }}>Owner</label>
                  <select className="select" value={projectForm.own} onChange={(e) => setProjectForm({ ...projectForm, own: e.target.value })}>
                    <option value="">Select...</option>
                    {Object.entries(users).map(([id, u]) => (
                      <option key={id} value={id}>{u.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 12 }}>
                <div>
                  <label style={{ display: 'block', marginBottom: 6, color: 'var(--tx2)', fontSize: 13 }}>Status</label>
                  <select className="select" value={projectForm.st} onChange={(e) => setProjectForm({ ...projectForm, st: e.target.value })}>
                    <option value="planning">Planning</option>
                    <option value="active">Active</option>
                    <option value="done">Done</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: 6, color: 'var(--tx2)', fontSize: 13 }}>Priority</label>
                  <select className="select" value={projectForm.pri} onChange={(e) => setProjectForm({ ...projectForm, pri: e.target.value })}>
                    <option value="high">High</option>
                    <option value="med">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: 6, color: 'var(--tx2)', fontSize: 13 }}>Progress</label>
                  <input
                    className="input"
                    type="number"
                    min="0"
                    max="100"
                    value={projectForm.prog}
                    onChange={(e) => setProjectForm({ ...projectForm, prog: Number(e.target.value) })}
                  />
                </div>
              </div>
              <div style={{ marginBottom: 12 }}>
                <label style={{ display: 'block', marginBottom: 6, color: 'var(--tx2)', fontSize: 13 }}>Due Date</label>
                <input
                  className="input"
                  type="date"
                  value={projectForm.due}
                  onChange={(e) => setProjectForm({ ...projectForm, due: e.target.value })}
                />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label style={{ display: 'block', marginBottom: 6, color: 'var(--tx2)', fontSize: 13 }}>Description</label>
                <textarea
                  className="textarea"
                  placeholder="What is this project about?"
                  value={projectForm.desc}
                  onChange={(e) => setProjectForm({ ...projectForm, desc: e.target.value })}
                />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label style={{ display: 'block', marginBottom: 6, color: 'var(--tx2)', fontSize: 13 }}>Expected Impact</label>
                <input
                  className="input"
                  placeholder="e.g., Team productivity +40%"
                  value={projectForm.impact}
                  onChange={(e) => setProjectForm({ ...projectForm, impact: e.target.value })}
                />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', marginBottom: 6, color: 'var(--tx2)', fontSize: 13 }}>Blockers</label>
                <input
                  className="input"
                  placeholder="Any blockers? (optional)"
                  value={projectForm.block}
                  onChange={(e) => setProjectForm({ ...projectForm, block: e.target.value })}
                />
              </div>
              <div style={{ display: 'flex', gap: 12 }}>
                <button className="btn btn-ghost" onClick={cm}>Cancel</button>
                <button className="btn btn-primary" onClick={() => {
                  if (!projectForm.name) { toast('Project name required', 'warning'); return; }
                  if (modalData?.id) {
                    setProjects(prev => prev.map(p => p.id === modalData.id ? { ...p, ...projectForm } : p));
                    toast('Project updated!', 'success');
                  } else {
                    setProjects(prev => [...prev, { id: genId(), ...projectForm, created: new Date().toISOString() }]);
                    toast('Project created!', 'success');
                    addLog(user, 'create_project', `Created project: ${projectForm.name}`);
                  }
                  cm();
                }}>
                  {modalData?.id ? 'Update Project' : 'Create Project'}
                </button>
              </div>
            </div>
          )}

          {/* User Modal */}
          {modal === 'm-user' && (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                <div>
                  <label style={{ display: 'block', marginBottom: 6, color: 'var(--tx2)', fontSize: 13 }}>Username *</label>
                  <input
                    className="input"
                    placeholder="e.g., john"
                    value={userForm.username}
                    onChange={(e) => setUserForm({ ...userForm, username: e.target.value.toLowerCase().replace(/\s/g, '') })}
                    disabled={!!modalData?.id}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: 6, color: 'var(--tx2)', fontSize: 13 }}>Full Name *</label>
                  <input
                    className="input"
                    placeholder="John Doe"
                    value={userForm.name}
                    onChange={(e) => setUserForm({ ...userForm, name: e.target.value })}
                  />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                <div>
                  <label style={{ display: 'block', marginBottom: 6, color: 'var(--tx2)', fontSize: 13 }}>Role</label>
                  <select className="select" value={userForm.role} onChange={(e) => setUserForm({ ...userForm, role: e.target.value })}>
                    <option value="member">Member</option>
                    <option value="manager">Manager</option>
                    <option value="mentor">Mentor</option>
                    {user === 'onkar' && <option value="owner">Owner</option>}
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: 6, color: 'var(--tx2)', fontSize: 13 }}>Department</label>
                  <select className="select" value={userForm.dept} onChange={(e) => setUserForm({ ...userForm, dept: e.target.value })}>
                    <option value="">Select...</option>
                    {depts.map(d => (
                      <option key={d.id} value={d.name}>{d.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div style={{ marginBottom: 12 }}>
                <label style={{ display: 'block', marginBottom: 6, color: 'var(--tx2)', fontSize: 13 }}>Phone</label>
                <input
                  className="input"
                  placeholder="+91 ..."
                  value={userForm.phone}
                  onChange={(e) => setUserForm({ ...userForm, phone: e.target.value })}
                />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label style={{ display: 'block', marginBottom: 6, color: 'var(--tx2)', fontSize: 13 }}>Bio</label>
                <textarea
                  className="textarea"
                  placeholder="Short bio..."
                  value={userForm.bio}
                  onChange={(e) => setUserForm({ ...userForm, bio: e.target.value })}
                />
              </div>
              {(!modalData?.id || isCEO) && (
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: 'block', marginBottom: 6, color: 'var(--tx2)', fontSize: 13 }}>
                    {modalData?.id ? 'Set/Reset Password (CEO only)' : 'Password *'}
                  </label>
                  <input
                    className="input"
                    type="password"
                    placeholder={modalData?.id ? 'Leave blank to keep current password' : 'Initial password'}
                    value={userForm.pass}
                    onChange={(e) => setUserForm({ ...userForm, pass: e.target.value })}
                  />
                </div>
              )}
              <div style={{ display: 'flex', gap: 12 }}>
                <button className="btn btn-ghost" onClick={cm}>Cancel</button>
                <button className="btn btn-primary" onClick={async () => {
                  if (!userForm.username || !userForm.name) { toast('Username and name required', 'warning'); return; }
                  if (!modalData?.id && !userForm.pass) { toast('Password required', 'warning'); return; }
                  if (modalData?.id) {
                    const passwordUpdate = isCEO && userForm.pass ? { pass: await _hashPassword(userForm.pass) } : {};
                    setUsers(prev => ({
                      ...prev,
                      [modalData.id]: { ...prev[modalData.id], name: userForm.name, role: userForm.role, dept: userForm.dept, phone: userForm.phone, bio: userForm.bio, ...passwordUpdate }
                    }));
                    toast('Member updated!', 'success');
                  } else {
                    if (users[userForm.username]) { toast('Username already exists', 'error'); return; }
                    const initials = userForm.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
                    const hashedPassword = await _hashPassword(userForm.pass);
                    setUsers(prev => ({
                      ...prev,
                      [userForm.username]: {
                        pass: hashedPassword,
                        name: userForm.name,
                        role: userForm.role,
                        dept: userForm.dept,
                        av: initials,
                        col: `hsl(${Math.random() * 360}, 70%, 50%)`,
                        phone: userForm.phone,
                        bio: userForm.bio,
                        status: 'offline',
                        active: true,
                        totalLogins: 0,
                        lastSeen: null,
                        sessions: []
                      }
                    }));
                    toast('Member added!', 'success');
                    addLog(user, 'add_user', `Added team member: ${userForm.name}`);
                  }
                  cm();
                }}>
                  {modalData?.id ? 'Update Member' : 'Add Member'}
                </button>
              </div>
            </div>
          )}

          {/* Department Modal */}
          {modal === 'm-dept' && (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gap: 12, marginBottom: 12 }}>
                <div>
                  <label style={{ display: 'block', marginBottom: 6, color: 'var(--tx2)', fontSize: 13 }}>Department Name *</label>
                  <input
                    className="input"
                    placeholder="e.g., Engineering"
                    value={deptForm.name}
                    onChange={(e) => setDeptForm({ ...deptForm, name: e.target.value })}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: 6, color: 'var(--tx2)', fontSize: 13 }}>Emoji</label>
                  <input
                    className="input"
                    placeholder="📁"
                    value={deptForm.emoji}
                    onChange={(e) => setDeptForm({ ...deptForm, emoji: e.target.value })}
                  />
                </div>
              </div>
              <div style={{ marginBottom: 12 }}>
                <label style={{ display: 'block', marginBottom: 6, color: 'var(--tx2)', fontSize: 13 }}>Description</label>
                <textarea
                  className="textarea"
                  placeholder="What does this department do?"
                  value={deptForm.desc}
                  onChange={(e) => setDeptForm({ ...deptForm, desc: e.target.value })}
                />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', marginBottom: 6, color: 'var(--tx2)', fontSize: 13 }}>Department Head</label>
                <select className="select" value={deptForm.head} onChange={(e) => setDeptForm({ ...deptForm, head: e.target.value })}>
                  <option value="">Select...</option>
                  {Object.entries(users).map(([id, u]) => (
                    <option key={id} value={id}>{u.name}</option>
                  ))}
                </select>
              </div>
              <div style={{ display: 'flex', gap: 12 }}>
                <button className="btn btn-ghost" onClick={cm}>Cancel</button>
                <button className="btn btn-primary" onClick={() => {
                  if (!deptForm.name) { toast('Department name required', 'warning'); return; }
                  if (modalData?.id) {
                    setDepts(prev => prev.map(d => d.id === modalData.id ? { ...d, ...deptForm } : d));
                    toast('Department updated!', 'success');
                  } else {
                    setDepts(prev => [...prev, { id: genId(), ...deptForm }]);
                    toast('Department created!', 'success');
                    addLog(user, 'create_dept', `Created department: ${deptForm.name}`);
                  }
                  cm();
                }}>
                  {modalData?.id ? 'Update Department' : 'Create Department'}
                </button>
              </div>
            </div>
          )}

          {/* Automation Modal */}
          {modal === 'm-automation' && (
            <div>
              <div style={{ marginBottom: 12 }}>
                <label style={{ display: 'block', marginBottom: 6, color: 'var(--tx2)', fontSize: 13 }}>Workflow Name *</label>
                <input
                  className="input"
                  placeholder="e.g., Lead to CRM Sync"
                  value={autoForm.name}
                  onChange={(e) => setAutoForm({ ...autoForm, name: e.target.value })}
                />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                <div>
                  <label style={{ display: 'block', marginBottom: 6, color: 'var(--tx2)', fontSize: 13 }}>Trigger</label>
                  <input
                    className="input"
                    placeholder="e.g., Google Form Submit"
                    value={autoForm.trigger}
                    onChange={(e) => setAutoForm({ ...autoForm, trigger: e.target.value })}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: 6, color: 'var(--tx2)', fontSize: 13 }}>Action</label>
                  <input
                    className="input"
                    placeholder="e.g., Create Lead + Send WA"
                    value={autoForm.action}
                    onChange={(e) => setAutoForm({ ...autoForm, action: e.target.value })}
                  />
                </div>
              </div>
              <div style={{ marginBottom: 12 }}>
                <label style={{ display: 'block', marginBottom: 6, color: 'var(--tx2)', fontSize: 13 }}>Webhook URL (optional)</label>
                <input
                  className="input"
                  placeholder="https://n8n.example.com/webhook/..."
                  value={autoForm.webhook}
                  onChange={(e) => setAutoForm({ ...autoForm, webhook: e.target.value })}
                />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', marginBottom: 6, color: 'var(--tx2)', fontSize: 13 }}>Status</label>
                <select className="select" value={autoForm.st} onChange={(e) => setAutoForm({ ...autoForm, st: e.target.value })}>
                  <option value="planned">Planned</option>
                  <option value="building">Building</option>
                  <option value="live">Live</option>
                </select>
              </div>
              <div style={{ display: 'flex', gap: 12 }}>
                <button className="btn btn-ghost" onClick={cm}>Cancel</button>
                <button className="btn btn-primary" onClick={() => {
                  if (!autoForm.name) { toast('Workflow name required', 'warning'); return; }
                  if (modalData?.id) {
                    setN8nFlows(prev => prev.map(f => f.id === modalData.id ? { ...f, ...autoForm } : f));
                    toast('Automation updated!', 'success');
                  } else {
                    setN8nFlows(prev => [...prev, { id: genId(), tool: 'n8n', ...autoForm, runs: 0, lastRun: null }]);
                    toast('Automation created!', 'success');
                    addLog(user, 'create_automation', `Created automation: ${autoForm.name}`);
                  }
                  cm();
                }}>
                  {modalData?.id ? 'Update Automation' : 'Create Automation'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // MAIN RENDER
  // ═══════════════════════════════════════════════════════════════════════════
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg)' }}>
      {/* Sidebar */}
      <aside
        className="sidebar"
        style={{
          transform: sidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.25s ease',
          width: 240
        }}
      >
        {/* Logo */}
        <div style={{ 
          padding: '20px 16px', 
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          gap: 12
        }}>
          <div style={{ 
            width: 40, 
            height: 40, 
            background: 'linear-gradient(135deg, var(--sun), var(--sun2))',
            borderRadius: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(255,140,0,0.25)'
          }}>
            <Sun size={22} color="#fff" />
          </div>
          <div>
            <div style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 16, color: 'var(--tx)' }}>
              Surya OS
            </div>
            <div style={{ fontSize: 10, color: 'var(--tx3)', textTransform: 'uppercase', letterSpacing: 1 }}>
              AIC-MIT ADT
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav style={{ flex: 1, overflowY: 'auto', padding: '12px 0' }}>
          {navItems.map(item => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`sidebar-nav-item ${page === item.id ? 'active' : ''}`}
                onClick={() => goTo(item.id)}
              >
                <Icon size={18} />
                <span style={{ fontSize: 13 }}>{item.label}</span>
                {item.badge > 0 && <div className="nav-badge">{item.badge}</div>}
              </div>
            );
          })}
        </nav>

        {/* Settings & Logout */}
        <div style={{ padding: 12, borderTop: '1px solid var(--border)' }}>
          <div
            className="sidebar-nav-item"
            onClick={() => om('m-api')}
          >
            <Settings size={18} />
            <span style={{ fontSize: 13 }}>API Settings</span>
          </div>
          <div
            className="sidebar-nav-item"
            onClick={exportData}
          >
            <Download size={18} />
            <span style={{ fontSize: 13 }}>Export Backup</span>
          </div>
          <div
            className="sidebar-nav-item"
            onClick={doLogout}
            style={{ color: 'var(--red)' }}
          >
            <LogOut size={18} />
            <span style={{ fontSize: 13 }}>Logout</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className="main-content"
        style={{
          marginLeft: isMobile ? 0 : (sidebarOpen ? 240 : 0),
          width: isMobile ? '100%' : `calc(100% - ${sidebarOpen ? 240 : 0}px)`,
          transition: 'margin-left 0.25s ease, width 0.25s ease'
        }}
      >
        {/* Topbar */}
        <header className="topbar">
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <button
              className="btn btn-ghost btn-icon"
              onClick={() => setSidebarOpen(prev => !prev)}
              aria-label={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
            >
              <Menu size={18} />
            </button>
            <h2 style={{ fontFamily: 'Syne', fontSize: 18, fontWeight: 700, color: 'var(--tx)' }}>
              {navItems.find(n => n.id === page)?.label || 'Surya OS'}
            </h2>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            {/* Session Timer */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 8,
              padding: '8px 12px',
              background: 'var(--bg3)',
              borderRadius: 8,
              fontSize: 12,
              color: 'var(--tx2)'
            }}>
              <Clock size={14} />
              {formatDuration(sessionTime * 1000)}
            </div>

            {/* User Menu */}
            <div 
              onClick={() => goTo('profile')}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 10,
                padding: '6px 12px 6px 6px',
                background: 'var(--bg3)',
                borderRadius: 20,
                cursor: 'pointer',
                transition: 'background 0.2s'
              }}
            >
              <div 
                className="avatar avatar-sm"
                style={{ background: currentUser.col, color: '#fff' }}
              >
                {currentUser.av}
              </div>
              <span style={{ fontSize: 13, color: 'var(--tx)' }}>
                {currentUser.name.split(' ')[0]}
              </span>
              <div className="dot dot-online" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="page-content">
          {renderPage()}
        </div>
      </main>

      {isMobile && sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.4)',
            zIndex: 45
          }}
        />
      )}

      {/* Modals */}
      {renderModals()}

      {/* Toasts */}
      <div className="toast-container">
        {toasts.map(t => (
          <div key={t.id} className={`toast toast-${t.type}`}>
            {t.type === 'success' && <Check size={16} color="var(--green)" />}
            {t.type === 'error' && <AlertCircle size={16} color="var(--red)" />}
            {t.type === 'warning' && <AlertTriangle size={16} color="var(--amber)" />}
            {t.type === 'info' && <Sparkles size={16} color="var(--blue)" />}
            {t.msg}
          </div>
        ))}
      </div>
    </div>
  );
}
