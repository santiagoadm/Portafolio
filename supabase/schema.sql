-- Tabla de mensajes del formulario de contacto.
-- Ejecutar en el SQL Editor del proyecto de Supabase.

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(btrim(name)) between 1 and 120),
  email text not null check (char_length(email) <= 254 and email ~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'),
  message text not null check (char_length(btrim(message)) between 10 and 5000)
);

alter table public.contact_messages enable row level security;

-- La clave anon del frontend solo puede insertar: nadie puede leer los mensajes
-- sin la service role key (o desde el panel de Supabase).
drop policy if exists "anon puede enviar mensajes" on public.contact_messages;
create policy "anon puede enviar mensajes"
  on public.contact_messages
  for insert
  to anon
  with check (true);
