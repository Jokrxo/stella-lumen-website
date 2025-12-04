import { BLOG_POSTS } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Blog() {
  return (
    <div className="pt-20 pb-20">
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Our Blog</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Insights, news, and updates from the Stella Lumen team.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 gap-16 max-w-4xl mx-auto">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="flex flex-col bg-white rounded-lg overflow-hidden shadow-lg border border-border">
              {/* Image Carousel for Blog Post */}
              <div className="w-full h-[400px] bg-gray-100 relative">
                 <Carousel className="w-full h-full">
                   <CarouselContent>
                     <CarouselItem className="h-[400px]">
                       <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                     </CarouselItem>
                     {/* Mocking additional images for carousel effect */}
                     <CarouselItem className="h-[400px]">
                       <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200" alt="Alt View" className="w-full h-full object-cover" />
                     </CarouselItem>
                   </CarouselContent>
                   <div className="absolute inset-0 pointer-events-none flex items-center justify-between px-4">
                      <div className="pointer-events-auto"><CarouselPrevious variant="secondary" /></div>
                      <div className="pointer-events-auto"><CarouselNext variant="secondary" /></div>
                   </div>
                 </Carousel>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-secondary" /> {post.date}</span>
                  <span className="flex items-center gap-2"><User className="w-4 h-4 text-secondary" /> Admin</span>
                </div>
                
                <h2 className="text-3xl font-serif font-bold text-primary mb-4 hover:text-secondary transition-colors cursor-pointer">
                  {post.title}
                </h2>
                
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {post.excerpt} Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white group">
                  Read Full Article <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
