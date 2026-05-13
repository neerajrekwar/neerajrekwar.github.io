'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle, AlertCircle, BarChart, Send, FileText, Loader2, Edit, Trash2 } from 'lucide-react';
import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor";

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

interface Post {
  slug: string;
  title: string;
  description: string;
  content: string;
  imageUrl: string;
  date: string;
  duration: string;
}

export default function SubmitFormClient() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [keyword, setKeyword] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);
  const [editingSlug, setEditingSlug] = useState('');

  const fetchPosts = async () => {
    try {
      const res = await fetch('/api/submit-article');
      if (res.ok) {
        const data = await res.json();
        setPosts(data);
      }
    } catch (err) {
      console.error('Failed to fetch posts', err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleEdit = (post: Post) => {
    setTitle(post.title);
    setDescription(post.description);
    setContent(post.content);
    setImageUrl(post.imageUrl);
    setEditingSlug(post.slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (slug: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;
    try {
      const res = await fetch(`/api/submit-article?slug=${slug}`, {
        method: 'DELETE'
      });
      if (res.ok) {
        fetchPosts();
      } else {
        alert('Failed to delete');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus('submitting');
    setErrorMessage('');

    try {
      const method = editingSlug ? 'PUT' : 'POST';
      const body = { slug: editingSlug, title, description, content, keyword, imageUrl };

      const response = await fetch('/api/submit-article', {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
      }

      setSubmissionStatus('success');
      fetchPosts();
      setEditingSlug('');
      setTitle('');
      setDescription('');
      setContent('');
      setKeyword('');
      setImageUrl('');
      setTimeout(() => setSubmissionStatus('idle'), 3000);
    } catch (error: any) {
      setSubmissionStatus('error');
      setErrorMessage(error.message);
    }
  };

  // SEO Evaluation Metrics
  const titleLength = title.length;
  const descLength = description.length;
  const plainTextContent = content.replace(/<[^>]+>/g, ' ');
  const wordCount = plainTextContent.trim() ? plainTextContent.trim().split(/\s+/).filter(w => w.length > 0).length : 0;
  const keywordInTitle = keyword && title.toLowerCase().includes(keyword.toLowerCase());
  const keywordInDesc = keyword && description.toLowerCase().includes(keyword.toLowerCase());
  const keywordInContent = keyword && content.toLowerCase().includes(keyword.toLowerCase());

  // Scoring Logic
  let score = 0;

  if (titleLength >= 40 && titleLength <= 60) { score += 16.6; }
  if (descLength >= 120 && descLength <= 160) { score += 16.6; }
  if (wordCount >= 300) { score += 16.6; }
  if (keyword && keywordInTitle) { score += 16.6; }
  if (keyword && keywordInDesc) { score += 16.6; }
  if (keyword && keywordInContent) { score += 16.6; }

  const seoScore = Math.min(Math.round(score), 100);

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-[#25D366]';
    if (score >= 50) return 'text-[#f59e0b]';
    return 'text-[#ef4444]';
  };

  const getScoreBg = (score: number) => {
    if (score >= 80) return 'bg-[#25D366]/10 border-[#25D366]/30';
    if (score >= 50) return 'bg-[#f59e0b]/10 border-[#f59e0b]/30';
    return 'bg-[#ef4444]/10 border-[#ef4444]/30';
  };

  return (
    <div className="flex flex-col gap-12 w-full max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-8 w-full">
        {/* Editor/Form Section */}
        <div className="flex-1 bg-six/30 border border-seven rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden">
          <h2 className="text-2xl font-bold text-four mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6 text-third" /> {editingSlug ? 'Edit Article' : 'Article Editor'}
          </h2>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-five mb-2">Target Focus Keyword</label>
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="e.g. Next.js SEO"
              className="w-full bg-primary border border-seven rounded-xl px-4 py-3 text-four focus:outline-none focus:ring-2 focus:ring-third transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-five mb-2 flex justify-between">
              <span>SEO Title</span>
              <span className={`text-xs ${titleLength >= 40 && titleLength <= 60 ? 'text-[#25D366]' : 'text-five'}`}>
                {titleLength} / 60
              </span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter a captivating title"
              className="w-full bg-primary border border-seven rounded-xl px-4 py-3 text-four focus:outline-none focus:ring-2 focus:ring-third transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-five mb-2 flex justify-between">
              <span>Meta Description</span>
              <span className={`text-xs ${descLength >= 120 && descLength <= 160 ? 'text-[#25D366]' : 'text-five'}`}>
                {descLength} / 160
              </span>
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write a compelling meta description"
              rows={3}
              className="w-full bg-primary border border-seven rounded-xl px-4 py-3 text-four focus:outline-none focus:ring-2 focus:ring-third transition-all resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-five mb-2">Featured Image URL</label>
            <input
              type="url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://images.unsplash.com/photo-..."
              className="w-full bg-primary border border-seven rounded-xl px-4 py-3 text-four focus:outline-none focus:ring-2 focus:ring-third transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-five mb-2 flex justify-between">
              <span>Article Content</span>
              <span className={`text-xs ${wordCount >= 300 ? 'text-[#25D366]' : 'text-five'}`}>
                {wordCount} words
              </span>
            </label>
            <div className="w-full bg-primary border border-seven rounded-xl text-four focus-within:ring-2 focus-within:ring-third transition-all overflow-hidden min-h-[300px]">
              <SimpleEditor 
                value={content} 
                onChange={(val) => setContent(val)} 
              />
            </div>
          </div>
          
          <button 
            type="submit"
            disabled={submissionStatus === 'submitting'}
            className="w-full flex items-center justify-center gap-2 bg-third text-primary font-bold text-lg rounded-xl px-6 py-4 hover:opacity-90 transition-opacity shadow-lg shadow-third/20 disabled:bg-seven disabled:cursor-not-allowed mb-3"
          >
            {submissionStatus === 'submitting' ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
            {submissionStatus === 'submitting' ? (editingSlug ? 'Updating...' : 'Submitting...') : (editingSlug ? 'Update Article' : 'Submit Article for Review')}
          </button>

          {editingSlug && (
            <button 
              type="button"
              onClick={() => {
                setEditingSlug('');
                setTitle('');
                setDescription('');
                setContent('');
                setKeyword('');
                setImageUrl('');
              }}
              className="w-full flex items-center justify-center gap-2 bg-transparent border border-seven text-four font-bold text-lg rounded-xl px-6 py-4 hover:bg-seven/50 transition-colors"
            >
              Cancel Edit
            </button>
          )}

          {submissionStatus === 'success' && (
            <div className="mt-4 text-center p-3 rounded-lg bg-[#25D366]/10 text-[#25D366] flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <p>{editingSlug ? 'Article updated!' : 'Article submitted! It has been saved to posts.json.'}</p>
            </div>
          )}
          {submissionStatus === 'error' && (
            <div className="mt-4 text-center p-3 rounded-lg bg-[#ef4444]/10 text-[#ef4444] flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              <p>Error: {errorMessage}</p>
            </div>
          )}
        </form>
      </div>

      {/* SEO Status Card Section */}
      <div className="w-full lg:w-[400px]">
        <div className="bg-primary border border-seven rounded-3xl p-6 shadow-xl sticky top-8">
          <div className="flex items-center gap-3 mb-6">
            <BarChart className="w-6 h-6 text-third" />
            <h3 className="text-xl font-bold text-four">SEO Analysis</h3>
          </div>
          
          <div className="flex flex-col items-center justify-center mb-8">
            <div className={`w-32 h-32 rounded-full border-[6px] flex items-center justify-center mb-4 transition-colors duration-500 ${getScoreBg(seoScore)}`}>
              <span className={`text-4xl font-extrabold ${getScoreColor(seoScore)}`}>
                {seoScore}
              </span>
            </div>
            <p className="text-five font-medium text-sm">Overall SEO Score</p>
          </div>

          <div className="space-y-4">
            <SeoCheckItem label="Title Length (40-60 chars)" passed={titleLength >= 40 && titleLength <= 60} />
            <SeoCheckItem label="Description Length (120-160 chars)" passed={descLength >= 120 && descLength <= 160} />
            <SeoCheckItem label="Content Length (Min 300 words)" passed={wordCount >= 300} />
            
            <div className="border-t border-seven my-4"></div>
            
            <h4 className="text-sm font-semibold text-four mb-3">Focus Keyword Analysis</h4>
            {keyword ? (
              <>
                <SeoCheckItem label="Keyword in Title" passed={keywordInTitle} />
                <SeoCheckItem label="Keyword in Description" passed={keywordInDesc} />
                <SeoCheckItem label="Keyword in Content" passed={keywordInContent} />
              </>
            ) : (
              <p className="text-xs text-[#ef4444] bg-[#ef4444]/10 p-3 rounded-lg flex gap-2 items-start">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                Please set a focus keyword to see keyword analysis.
              </p>
            )}
          </div>
        </div>
      </div>
      </div>

      {/* Posts List Section */}
      <div className="bg-primary border border-seven rounded-3xl p-6 shadow-xl">
        <h2 className="text-2xl font-bold text-four mb-6 flex items-center gap-2">
          <FileText className="w-6 h-6 text-third" /> Manage Posts
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-seven text-sm text-five">
                <th className="pb-3 px-4 font-medium w-1/3">Title</th>
                <th className="pb-3 px-4 font-medium w-1/3">Description</th>
                <th className="pb-3 px-4 font-medium">Date</th>
                <th className="pb-3 px-4 font-medium">Duration</th>
                <th className="pb-3 px-4 font-medium text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.slug} className="border-b border-seven/50 hover:bg-six/10 transition-colors group">
                  <td className="py-4 px-4 align-top">
                    <p className="text-sm font-bold text-four line-clamp-2 group-hover:text-third transition-colors">{post.title}</p>
                  </td>
                  <td className="py-4 px-4 align-top">
                    <p className="text-sm text-five line-clamp-2">{post.description}</p>
                  </td>
                  <td className="py-4 px-4 align-top">
                    <span className="text-xs text-five bg-primary px-2 py-1 rounded-md border border-seven whitespace-nowrap">{post.date}</span>
                  </td>
                  <td className="py-4 px-4 align-top">
                    <span className="text-xs text-five bg-primary px-2 py-1 rounded-md border border-seven whitespace-nowrap">{post.duration}</span>
                  </td>
                  <td className="py-4 px-4 align-top">
                    <div className="flex items-center justify-center gap-2">
                      <button 
                        onClick={() => handleEdit(post)}
                        title="Edit"
                        className="p-2 bg-third/10 text-third hover:bg-third/20 rounded-lg transition-colors"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleDelete(post.slug)}
                        title="Delete"
                        className="p-2 bg-[#ef4444]/10 text-[#ef4444] hover:bg-[#ef4444]/20 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {posts.length === 0 && (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-five border-2 border-dashed border-seven rounded-2xl">
                    No posts found. Create one above!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function SeoCheckItem({ label, passed }: { label: string, passed: boolean | string }) {
  return (
    <div className="flex items-start gap-3">
      {passed ? (
        <CheckCircle className="w-5 h-5 text-[#25D366] shrink-0" />
      ) : (
        <AlertCircle className="w-5 h-5 text-[#ef4444] shrink-0" />
      )}
      <span className={`text-sm ${passed ? 'text-four' : 'text-five'}`}>
        {label}
      </span>
    </div>
  );
}