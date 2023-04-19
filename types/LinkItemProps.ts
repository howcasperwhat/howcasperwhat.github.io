import { Component } from 'vue';
export interface LinkItemProps {
  id: number
  icon: Component
  title: string
  details: string
  link: string
  tags: Array<String>
  color: string
}