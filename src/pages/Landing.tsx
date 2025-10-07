import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

const languages = [
  'English (ChatGPT)',
  'English (Claude)',
  'English (Llama)',
  'English (Human)',
  'Spanish (ChatGPT)',
  'French (ChatGPT)',
];

export default function Landing() {
  const [selectedLang, setSelectedLang] = useState('English (ChatGPT)');
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const handleHumanize = () => {
    if (!text.trim()) {
      toast({ title: 'Error', description: 'Please enter some text first.', variant: 'destructive' });
      return;
    }
    toast({ title: 'Processing...', description: 'Humanizing your content.' });
    // Mock processing
  };

  const handleCheckAI = () => {
    if (!text.trim()) {
      toast({ title: 'Error', description: 'Please enter some text first.', variant: 'destructive' });
      return;
    }
    toast({ title: 'Checking...', description: 'Analyzing content for AI.' });
    // Mock processing
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Humanize AI Generated Content
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            StealthWriter is an SEO tool that converts AI generated content into human-like content. Get better content & get 100% human score.
          </p>
          <Button size="lg" onClick={() => navigate('/signup')}>
            Try For Free
          </Button>
        </div>

        <div className="max-w-4xl mx-auto bg-card border rounded-lg p-6 shadow-sm">
          <div className="flex flex-wrap gap-2 mb-4">
            {languages.map((lang) => (
              <Button
                key={lang}
                variant={selectedLang === lang ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedLang(lang)}
              >
                {lang}
              </Button>
            ))}
          </div>

          <Textarea
            placeholder="Enter your text here (max 5000 words)..."
            className="min-h-[300px] mb-4"
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={5000}
          />

          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-muted-foreground">
              {text.length} characters | 0/{Math.floor(text.length / 5)} words
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Detector Mode:</span>
              <select className="border rounded px-2 py-1 text-sm">
                <option>Strict</option>
                <option>Moderate</option>
                <option>Relaxed</option>
              </select>
            </div>
          </div>

          <div className="flex gap-4">
            <Button variant="outline" className="flex-1" onClick={handleCheckAI}>
              Check for AI
            </Button>
            <Button className="flex-1" onClick={handleHumanize}>
              ✨ Humanize
            </Button>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-4">
            MULTI-LANGUAGE-DETECTOR-V1
          </p>
        </div>
      </main>
    </div>
  );
}
